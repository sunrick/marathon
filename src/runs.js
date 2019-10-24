import items from './items'
import _ from 'lodash'
import moment from 'moment'

const count = items.length

const daysLeft = () => {
  const firstDate = moment(items[count - 1].date)
  const secondDate = moment()
  return firstDate.diff(secondDate, 'days') // =1
}

const totalDistance = () => {
  return _.sumBy(items, 'distance')
}

export default (function Runs() {
  return {
    items: items,
    count: count,
    daysLeft: daysLeft,
    totalDistance: totalDistance
  }
})()
