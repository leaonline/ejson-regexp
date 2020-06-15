import { EJSON } from 'meteor/ejson'

function getOptions (self) {
  const opts = []
  if (self.global) opts.push('g')
  if (self.ignoreCase) opts.push('i')
  if (self.multiline) opts.push('m')
  return opts.join('')
}

RegExp.prototype.clone = function clone () {
  const self = this
  return new RegExp(self.source, getOptions(self))
}

RegExp.prototype.equals = function equals (other) {
  if (!(other instanceof RegExp)) return false
  const self = this
  return EJSON.stringify(self) === EJSON.stringify(other)
}

RegExp.prototype.typeName = function typeName () {
  return 'RegExp'
}

RegExp.prototype.toJSONValue = function toJSONValue () {
  const self = this
  return { regex: self.source, options: getOptions(self) }
}

EJSON.addType('RegExp', value => new RegExp(value.regex, value.options))
