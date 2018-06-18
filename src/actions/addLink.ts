import { NullAction } from '../types/Action';
import * as utils from '../utils';

export interface AddLinkAction {
    type: 'addLink';
    shortUrl: string;
    longUrl: string;
}

export default function addLink(url: string): AddLinkAction | NullAction {
    if (!url.match(/^https?:\/\//)) {
        return {
            type: 'null'
        };
    }
    return {
        type: 'addLink',
        shortUrl: utils.createShortLink(),
        longUrl: url
    };
}
