/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */

import Zone from '../zone.js';
import IANAZone from '../zones/IANAZone.js';
import FixedOffsetZone from '../zones/fixedOffsetZone.js';
import InvalidZone from '../zones/invalidZone.js';

import { isUndefined, isString, isNumber } from './util.js';
import SystemZone from '../zones/systemZone.js';

export function normalizeZone(input, defaultZone) {
  let offset;
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } if (input instanceof Zone) {
    return input;
  } if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === 'default') return defaultZone;
    if (lowered === 'local' || lowered === 'system') return SystemZone.instance;
    if (lowered === 'utc' || lowered === 'gmt') return FixedOffsetZone.utcInstance;
    return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } if (typeof input === 'object' && input.offset && typeof input.offset === 'number') {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  }
  return new InvalidZone(input);
}
