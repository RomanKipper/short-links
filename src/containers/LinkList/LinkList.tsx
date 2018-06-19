import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import State from '../../types/State';
import * as actions from '../../actions';
import NavLink from '../../components/NavLink';
import Link from '../../types/Link';
import ShortLink from '../../components/ShortLink';

import './LinkList.less';

interface Props {
    links: Link[];
    onDeleteLink: (longUrl: string) => void;
}

function mapStateToProps(state: State) {
    return {
        links: state.links
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onDeleteLink(longUrl: string) {
            dispatch(actions.deleteLink(longUrl));
        }
    };
}

const LinkList: React.SFC<Props> = (props) => (
    <div className="link-list">
        <h1 className="link-list__title">
            Короткие ссылки
        </h1>
        <div className="link-list__links">
            {props.links.length > 0
                ? props.links.map(link =>
                    <ShortLink key={link.longUrl}
                        className="link-list__item"
                        {...link}
                        onDelete={() => props.onDeleteLink(link.longUrl)}
                    />
                ) : 'Ссылок пока нет'
            }
        </div>
        <NavLink to="/" className="link-list__nav-link">
            Укоротить еще одну ссылку
        </NavLink>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
