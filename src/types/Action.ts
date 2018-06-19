import { AddLinkAction } from '../actions/addLink';
import { DeleteLinkAction } from '../actions/deleteLink';
import { TrackLinkClickAction } from '../actions/trackLinkClick';
import { SetLinkTextAction } from '../actions/setLinkText';

type Action = AddLinkAction |
    DeleteLinkAction |
    TrackLinkClickAction |
    SetLinkTextAction;

export default Action;
