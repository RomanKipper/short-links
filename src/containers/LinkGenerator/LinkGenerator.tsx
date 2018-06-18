import * as React from 'react';
import { connect } from 'react-redux';
import lodash from 'lodash';

import NavLink from '../../components/NavLink';
import { setLinkText } from '../../actions/setLinkText';
import createShortLink from '../../actions/createShortLink';
import trackShortLinkClick from '../../actions/trackShortLinkClick';

import './LinkGenerator.less';

export interface LinkGeneratorProps {
    linkText: string;
    lastLinks: any[];
    onLinkChanged: (text: string) => void;
    onCreateLink: (longLink: string) => void;
    onLinkClicked: (link: string) => void;
}

function manStateToProps(state: any) {
    return {
        linkText: state.linkText,
        lastLinks: state.shortLinks.lastShortLinks
            .map((linkId: string) => lodash.find(state.shortLinks.shortLinks, { link: linkId }))
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onLinkChanged(text: string) {
            dispatch(setLinkText(text));
        },
        onCreateLink(longLink: string) {
            dispatch(createShortLink(longLink))
        },
        onLinkClicked(link: string) {
            dispatch(trackShortLinkClick(link))
        }
    };
}

function LinkGenerator(props: LinkGeneratorProps) {
    return (
        <div className="link-generator">
            <h1 className="link-generator__title">
                Сервис коротких ссылок
            </h1>
            <div className="link-generator__input">
                <input type="text"
                    value={props.linkText}
                    placeholder="Вставьте ссылку"
                    onChange={event => props.onLinkChanged(event.target.value)}>        
                </input>
                <button type="button"
                    onClick={() => props.onCreateLink(props.linkText)}>Укоротить</button>
            </div>
            {props.lastLinks.length > 0 &&
                <div className="last-links">
                    {props.lastLinks.map(link =>
                        <div className="link" key={link.link}>
                            <span className="long-link">{link.originalLink}</span>
                            {' translated to '}
                            <a className="short-link"
                                href={link.originalLink} target="_blank"
                                onClick={() => props.onLinkClicked(link.link)}>
                                {link.link}
                            </a>
                        </div>
                    )}
                </div>
            }
            <NavLink to="/links" className="link-generator__nav-link">
                Смотреть все ссылки
            </NavLink>
        </div>
    );
}

export default connect(manStateToProps, mapDispatchToProps)(LinkGenerator);
