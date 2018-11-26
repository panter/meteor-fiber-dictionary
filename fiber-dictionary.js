/* eslint global-require: 0*/
/* eslint import/no-extraneous-dependencies: 0*/
import { Meteor } from 'meteor/meteor'

export default class FiberAwareVar {
  constructor(key) {
    this._key = key
  }

  getCurrentFiberContextValues() {
    const Fibers = require('fibers')

    if (!Fibers.current) {
      throw new Error('no fiber')
    }
    if (!Fibers.current['__fiberDict_' + key]) {
      Fibers.current['__fiberDict_' + key] = new WeakMap()
    }
    return Fibers.current['__fiberDict_' + key]
  }

  set(value) {
    getCurrentFiberContextValues().set('locale', value)
  }
  get() {
    return getCurrentFiberContextValues().get('locale')
  }
}
