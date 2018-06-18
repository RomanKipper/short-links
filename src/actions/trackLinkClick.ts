export interface TrackLinkClickAction {
    type: 'trackLinkClick';
    link: string;
}

export default function trackLinkClick(link: string): TrackLinkClickAction {
    return {
        type: 'trackLinkClick',
        link
    };
}
