import React from 'react'

import Runs from './runs'
import Run from './Run'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height: '300px',
        padding: '2rem'
      }}
    >
      {Runs.items.map(run => (
        <Run
          key={run.date}
          run={run}
          maxDistance={Runs.maxDistance()}
          count={Runs.count}
        />
      ))}
    </div>
  )
}

export default App
