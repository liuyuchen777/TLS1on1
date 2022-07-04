export default function createEnum(definition) {
  const strToValueMap = {}
  const numToDescMap = {}

  for (const enumName of Object.keys(definition)) {
    const [value, desc] = definition[enumName]
    strToValueMap[enumName] = value
    numToDescMap[value] = desc
  }
  
  return {
    ...strToValueMap,
    getDesc(enumName) {
      return (definition[enumName] && definition[enumName][1]) || ''
    },
    getDescFromValue(value) {
      return numToDescMap[value] || ''
    }
  }
}