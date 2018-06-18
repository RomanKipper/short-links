export interface TrackLinkClickAction {
    type: 'trackLinkClick';
    longUrl: string;
}

export default function trackLinkClick(longUrl: string): TrackLinkClickAction {
    return {
        type: 'trackLinkClick',
        longUrl
    };
}
