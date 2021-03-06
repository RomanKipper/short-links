import lodash from 'lodash';

import Action from '../types/Action';
import State from '../types/State';
import linksReducer from './linksReducer';

const initialState: State = {
    links: [],
    linkText: '',
    isValidLink: false,
    isShortLink: false
};

export default function mainReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'setLinkText':
            return {
                ...state,
                linkText: action.text,
                isValidLink: /^https?:\/\/[\w.-]+\.[\w]+\/?/.test(action.text),
                isShortLink: lodash.some(state.links, { shortUrl: action.text })
            };
        case 'addLink':
            const nextLinks = linksReducer(state.links, action);
            const newLink = lodash.find(nextLinks, { longUrl: action.longUrl });
            if (newLink) {
                return {
                    ...state,
                    links: nextLinks,
                    linkText: newLink.shortUrl,
                    isShortLink: true
                };
            }
            break;
    }

    return {
        ...state,
        links: linksReducer(state.links, action)
    };
}
