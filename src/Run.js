import React from 'react'

function Run({ run, maxDistance, count }) {
  const heightPercentage = (run.distance / maxDistance) * 100
  const widthPercentage = (1 / count) * 100

  return (
    <div
      style={{
        width: `${widthPercentage}%`,
        height: `${heightPercentage}%`,
        backgroundColor: '#fff'
      }}
    ></div>
  )
}

export default Run
