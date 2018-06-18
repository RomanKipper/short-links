import Action from '../types/Action';
import State from '../types/State';
import linksReducer from './linksReducer';

export default function mainReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setLinkText':
            return action.text;
        case 'clearLinkText':
            return '';
        default:
            return state;
    }
}
