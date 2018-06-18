/**
 * @fileoverview Utility functions for working with short links.
 * Encapsulate the exact format of a short link.
 */

import * as lodash from 'lodash';

export function createShortLink(): string {
    const hexDigits = [
        'a', 'b', 'c', 'd', 'e', 'f',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
    ];
    return 'https://sho.rt/' + lodash.times(5, () => lodash.sample(hexDigits)).join('');
}

export function isShortLink(link: string): boolean {
    return /^https:\/\/sho.rt\//.test(link);
}
