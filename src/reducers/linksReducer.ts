import * as lodash from 'lodash';

import Action from '../types/Action';
import Link from '../types/Link';
import { LinksState } from '../types/State';

export default function linksReducer(state: LinksState = [], action: Action): LinksState {
    switch (action.type) {
        case 'addLink':
            if (lodash.some(state, { longUrl: action.longUrl })) {
                break;
            }
            const newLink: Link = {
                shortUrl: action.shortUrl,
                longUrl: action.longUrl,
                clickCount: 0
            };
            return [newLink].concat(state);
        case 'deleteLink':
            const shortLink = lodash.find(state, { link: action.link });
            if (shortLink) {
                return lodash.differenceBy(state, [shortLink], 'link');                
            }
            break;
        case 'trackLinkClick':
            return state.map(shortLink => {
                if (shortLink.link === action.link) {
                    return {
                        ...shortLink,
                        clickCount: shortLink.clickCount + 1
                    };
                }
                return shortLink;
            });
    }

    return state;
}
