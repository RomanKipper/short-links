import * as React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.less';

interface Props {
    to: string;
    className: string;
}

const NavLink: React.SFC<Props> = (props) => (
    <Link to={props.to} className={'nav-link ' + props.className}>{props.children}</Link>
);

export default NavLink;
