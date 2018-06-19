/**
 * @fileoverview Utility functions for working with short links.
 * Encapsulate the exact format of a short link.
 */

import lodash from 'lodash';

const TOKEN_ALPHABET = [
    'a', 'b', 'c', 'd', 'e', 'f',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
const TOKEN_LENGTH = 5;

export function createShortLink(): string {
    // For sake of simplicity, we don't test on collisions between generated tokens.
    return location.origin + '/' + lodash.times(TOKEN_LENGTH, () => lodash.sample(TOKEN_ALPHABET)).join('');
}

export function shortLinkMatchesToken(shortUrl: string, token: string): boolean {
    return shortUrl.substr(-TOKEN_LENGTH) === token;
}
