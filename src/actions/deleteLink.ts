export interface DeleteLinkAction {
    type: 'deleteLink';
    longUrl: string;
}

export default function deleteLink(longUrl: string): DeleteLinkAction {
    return {
        type: 'deleteLink',
        longUrl
    };
}
