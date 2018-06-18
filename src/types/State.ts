import Link from './Link';

export type LinksState = Link[];

export default interface State {
    links: LinksState;
    // UI state:
    linkText: string;
    isShortLink: boolean;
}
