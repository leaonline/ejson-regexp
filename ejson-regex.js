import { EJSON } from 'meteor/ejson'

function getOptions (self) {
  const opts = []
  if (self.global) opts.push('g')
  if (self.ignoreCase) opts.push('i')
  if (self.multiline) opts.push('m')
  return opts.join('')
}

class EJSONRegExp extends RegExp {
  clone () {
    const self = this
    return new RegExp(self.source, getOptions(self))
  }

  equals (other) {
    if (!(other instanceof RegExp)) return false
    const self = this
    return EJSON.stringify(self) === EJSON.stringify(other)
  }

  typeName () {
    return 'RegExp'
  }

  toJSONValue () {
    const self = this
    return {
      regex: self.source,
      options: getOptions(self)
    }
  }
}

EJSON.addType('RegExp', value => new RegExp(value.regex, value.options))
