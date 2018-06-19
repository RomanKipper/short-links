import * as React from 'react';

import NavLink from '../../components/NavLink';
import './Page404.less';

const Page404: React.SFC = () => (
    <div className="page-404">
        <h1 className="page-404__title">
            Такой страницы не&nbsp;найдено
        </h1>
        <NavLink to="/" className="page-404__nav-link">
            На главную
        </NavLink>
    </div>
);

export default Page404;
