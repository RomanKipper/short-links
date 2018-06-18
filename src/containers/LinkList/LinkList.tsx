import * as React from 'react';
import { connect } from 'react-redux';

import NavLink from '../../components/NavLink';
import ShortLink from '../../interfaces/ShortLink';
import ListItem from '../../components/ShortLink';

import './LinkList.less';

interface Props {
    links: ShortLink[];
}

function mapStateToProps(state: any) {
    return {
        links: state.shortLinks.shortLinks
    };
}

class LinkList extends React.Component<Props> {
    render() {
        return (
            <div className="link-list">
                <h1 className="link-list__title">Короткие ссылки</h1>
                <div className="link-list__list">
                    {this.props.links.map(shortLink =>
                        <ListItem key={shortLink.link} className="link-list__item" {...shortLink} />
                    )}
                </div>
                <NavLink to="/" className="link-list__nav-link">
                    Укоротить еще одну ссылку
                </NavLink>
            </div>
        );
    }
}

export default connect(mapStateToProps)(LinkList);
