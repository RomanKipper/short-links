import * as utils from '../utils';

export interface AddLinkAction {
    type: 'addLink';
    shortUrl: string;
    longUrl: string;
}

export default function addLink(longUrl: string): AddLinkAction {
    return {
        type: 'addLink',
        shortUrl: utils.createShortLink(),
        longUrl
    };
}
