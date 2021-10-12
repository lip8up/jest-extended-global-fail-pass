require('jest-extended/all')

const jestExpect = global.expect

if (jestExpect === undefined) {
  throw new Error("Unable to find Jest's global expect. " + 'Please check you have added jest-extended correctly to your jest configuration. ' + 'See https://github.com/jest-community/jest-extended#setup for help.')
}

global.fail = message => jestExpect(1).fail(message)

global.pass = message => jestExpect(1).pass(message)
