import * as React from 'react';

import StatsIcon from '../StatsIcon';

import './ShortLink.less';

interface Props {
    shortUrl: string;
    longUrl: string;
    clickCount: number;
    className: string;
    onDelete: () => void;
}

const ShortLink: React.SFC<Props> = (props: Props) => (
    <div className={'short-link ' + props.className}>
        <div className="short-link__long-one">
            {/* Strip the protocol part, since it makes no sense in identifying the link */}
            {props.longUrl.replace(/^https?:\/\//, '')}
        </div>
        <div className="short-link__short-one">
            <div className="short-link__left-side">
                <a className="short-link__short-link"
                    href={props.shortUrl} target="_blank">
                    {props.shortUrl}
                </a>
                <button className="short-link__delete-button" type="button" onClick={props.onDelete}>
                    Удалить
                </button>
            </div>
            <div className="short-link__right-side">
                <span className="short-link__click-count">{props.clickCount}</span>
                <StatsIcon className="short-link__stats-icon" />
            </div>
        </div>
    </div>
);

export default ShortLink;
