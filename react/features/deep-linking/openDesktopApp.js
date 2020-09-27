/* global interfaceConfig */
// @flow

import { URI_PROTOCOL_PATTERN } from '../base/util';

/**
 * Opens the desktop app.
 *
 * @param {Object} state - Object containing current redux state.
 * @returns {Promise<boolean>} - Resolves with true if the attempt to open the desktop app was successful and resolves
 * with false otherwise.
 */
export function _openDesktopApp(state: Object) { // eslint-disable-line no-unused-vars

    const desktopScheme = interfaceConfig.DESKTOP_APP_SCHEME || 'jitsi-meet';
    const regex = new RegExp(URI_PROTOCOL_PATTERN, 'gi');
    const { href } = window.location;

    window.location = href.replace(regex, `${desktopScheme}:`);

    return Promise.resolve(true);

}
