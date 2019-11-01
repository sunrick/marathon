import data from './data'
import _ from 'lodash'
import moment from 'moment'

const count = data.length

const daysLeft = () => {
  const firstDate = moment(data[count - 1].date)
  const secondDate = moment()
  return firstDate.diff(secondDate, 'days') // =1
}

const totalDistance = () => {
  return _.sumBy(data, 'distance').toFixed(2)
}

const totalRuns = () => {
  return data.filter(item => item.distance > 0).length
}

const caloriesBurned = () => {
  return Math.round(_.sumBy(data, 'calories'))
}

export default (function Runs() {
  return {
    items: data,
    count: count,
    daysLeft: daysLeft,
    totalDistance: totalDistance,
    totalRuns: totalRuns,
    caloriesBurned: caloriesBurned
  }
})()
