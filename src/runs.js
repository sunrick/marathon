import items from './items'

export default (function Runs() {
  return {
    items: items,
    count: items.length
  }
})()
