import * as React from 'react';

import StatsIcon from './StatsIcon';

import './ShortLink.less';

interface Props {
    link: string;
    originalLink: string;
    clickCount: number;
    className: string;
    onClick?: () => void;
    onDelete?: () => void;
}

export default function ShortLink(props: Props) {
    return (
        <div className={'short-link ' + props.className}>
            <div className="short-link__long-one">
                {/* Strip the protocol part, since it makes no sense in identifying the link */}
                {props.originalLink.replace(/^https?:\/\//, '')}
            </div>
            <div className="short-link__short-one">
                <span className="short-link__short-link">{props.link}</span>
                <span className="short-link__click-count">{props.clickCount}</span>
                <StatsIcon />
            </div>
        </div>
    );
}
