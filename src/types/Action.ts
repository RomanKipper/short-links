import { AddLinkAction } from '../actions/addLink';
import { DeleteLinkAction } from '../actions/deleteLink';
import { TrackLinkClickAction } from '../actions/trackLinkClick';
import { SetLinkTextAction } from '../actions/setLinkText';

export interface NullAction {
    type: 'null';
}

type Action = AddLinkAction |
    DeleteLinkAction |
    TrackLinkClickAction |
    SetLinkTextAction |
    NullAction;

export default Action;
