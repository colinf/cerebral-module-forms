var rules = require('./helpers/rules.js')
var MODULE = 'cerebral-module-forms'

module.exports = function (options) {
  options = options || {}

  if (options.rules) {
    Object.keys(options.rules).forEach(function (key) {
      rules[key] = options.rules[key]
    })
  }

  return function (module, controller) {
    module.alias(MODULE)

    module.addSignals({
      fieldAdded: require('./signals/fieldAdded.js'),
      fieldRemoved: require('./signals/fieldRemoved.js'),
      fieldChanged: {chain: require('./signals/fieldChanged.js'), immediate: true},
      formAdded: require('./signals/formAdded.js'),
      formRemoved: require('./signals/formRemoved.js'),
      formValidated: require('./signals/formValidated.js'),
      reset: require('./signals/reset.js')
    })
  }
}
