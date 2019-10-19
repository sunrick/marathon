import React from 'react'

import Runs from './runs'
import Run from './Run'

function BarChart() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        padding: '5rem',
        height: '300px',
        width: '1100px'
      }}
    >
      <div>First day (2019-10-17)</div>
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'flex-end',
          height: '200px'
        }}
      >
        {Runs.items.map(run => (
          <Run key={run.date} run={run} maxDistance={26.2} count={Runs.count} />
        ))}
      </div>
      <div>Marthon (2020-03-01)</div>
    </div>
  )
}

export default BarChart
