import type { API } from 'homebridge';

import { CompuLinkPlatform } from './platform.js';
import { PLATFORM_NAME } from './settings.js';

export default (api: API) => {
  api.registerPlatform(PLATFORM_NAME, CompuLinkPlatform);
};
