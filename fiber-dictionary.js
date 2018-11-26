/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import { Meteor } from 'meteor/meteor';

class FiberDictionary {
  constructor(dictKey) {
    this._dictKey = dictKey;
  }

  getCurrentDictionary() {
    const Fibers = require('fibers');

    if (!Fibers.current) {
      throw new Error('no fiber');
    }
    if (!Fibers.current[`__fiberDict_${this._dictKey}`]) {
      Fibers.current[`__fiberDict_${this._dictKey}`] = new Map();
    }
    return Fibers.current[`__fiberDict_${this._dictKey}`];
  }

  set(dictKey, value) {
    this.getCurrentDictionary().set(dictKey, value);
  }

  get(key) {
    return this.getCurrentDictionary().get(key);
  }
}

export { FiberDictionary };
