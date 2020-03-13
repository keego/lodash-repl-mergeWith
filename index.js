import _ from 'lodash'

const data = {
  type: 'type',
  entity: {
    name: 'keegs',
    age: '25',
    height: '6',
  }
}

const allowed = {
  type: true,
  entity: {
    height: true,
  }
}

const customizer = (objValue, srcValue, key, object, source, stack) => {
  const position = stack.get('position')
  stack.set('position', [key])
  console.log({ objValue, srcValue, key, object, source, position })
  const isAllowed = allowed[key]
  if (!isAllowed) {
    return '<redacted>'
  }
}
console.log('data', _.mergeWith({}, data, customizer))
