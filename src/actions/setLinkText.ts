export interface SetLinkTextAction {
    type: 'setLinkText',
    text: string;
}

export default function setLinkText(text: string): SetLinkTextAction {
    return {
        type: 'setLinkText',
        text
    };
}
