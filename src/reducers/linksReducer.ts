import lodash from 'lodash';

import Link from '../types/Link';
import Action from '../types/Action';
import { LinksState } from '../types/State';

export default function linksReducer(state: LinksState = [], action: Action): LinksState {
    switch (action.type) {
        case 'addLink':
            if (!lodash.some(state, { longUrl: action.longUrl })) {
                const newLink: Link = {
                    shortUrl: action.shortUrl,
                    longUrl: action.longUrl,
                    clickCount: 0
                };
                return [newLink].concat(state);
            }
            break;
        case 'deleteLink':
            const link = lodash.find(state, { longUrl: action.longUrl });
            if (link) {
                return lodash.without(state, link);
            }
            break;
        case 'trackLinkClick':
            return state.map(link => {
                if (link.longUrl === action.longUrl) {
                    return {
                        ...link,
                        clickCount: link.clickCount + 1
                    };
                }
                return link;
            });
    }

    return state;
}
