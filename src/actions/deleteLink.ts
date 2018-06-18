export interface DeleteLinkAction {
    type: 'deleteLink';
    url: string;
}

export default function deleteLink(url: string): DeleteLinkAction {
    return {
        type: 'deleteLink',
        url
    };
}
