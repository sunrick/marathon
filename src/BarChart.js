import React from 'react'

import Runs from './runs'
import Run from './Run'

function BarChart() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        padding: '5rem'
      }}
    >
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.8em' }}>DAY 1</p>
        <p style={{ fontSize: '0.7em' }}>2019-10-18</p>
      </div>
      <div style={{ padding: '0 30px' }}>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flex: 1,
            alignItems: 'flex-end',
            height: '200px',
            width: '800px',
            borderTop: '1px dashed #fff',
            position: 'relative'
          }}
        >
          <div
            style={{
              top: '-7px',
              left: '-70px',
              position: 'absolute',
              fontWeight: 700,
              fontSize: '0.7em'
            }}
          >
            26.2 MILES
          </div>
          {Runs.items.map(run => (
            <Run
              key={run.date}
              run={run}
              maxDistance={26.2}
              count={Runs.count}
            />
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.8em' }}>DAY 136</p>
        <p style={{ fontSize: '0.7em' }}>2020-03-01</p>
      </div>
    </div>
  )
}

export default BarChart
