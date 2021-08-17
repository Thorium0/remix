/**
 * @ Author: ManonIcu
 * @ Create Time: 2021/5/21 17:30
 * @ Modified by: ManonIcu
 * @ Modified time: 2021/5/21 17:30
 * @ Description:
 */
const _rawType = (val) => Object.prototype.toString.call(val).slice(8, -1)

const isObject = (val) => _rawType(val) === 'Object'
const isArray = (val) => _rawType(val) === 'Array'

export { isObject, isArray }
