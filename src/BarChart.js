import React from 'react'
import styled from 'styled-components/macro'

import Runs from './runs'
import Run from './Run'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5rem;
`

const ChartArea = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: flex-end;
  height: 200px;
  width: 800px;
  border-top: 1px dashed #fff;
`

const Padder = styled.div`
  padding: 0 30px;
`

const DistanceLabel = styled.div`
  top: -7px;
  left: -70px;
  position: absolute;
  font-weight: 700;
  font-size: 0.7em;
`

function Date({ day, date }) {
  return (
    <div>
      <p
        css={`
          font-weight: 700;
          font-size: 0.8em;
          margin-bottom: 0;
          margin-top: 0;
        `}
      >
        DAY {day}
      </p>
      <p
        css={`
          font-size: 0.7em;
          margin-bottom: 0;
          margin-top: 0;
        `}
      >
        {date}
      </p>
    </div>
  )
}

function BarChart() {
  return (
    <Wrapper>
      <Date day={1} date={'2019-10-18'} />
      <Padder>
        <ChartArea>
          <DistanceLabel>26.2 MILES</DistanceLabel>
          {Runs.items.map(run => (
            <Run
              key={run.date}
              run={run}
              maxDistance={26.2}
              count={Runs.count}
            />
          ))}
        </ChartArea>
      </Padder>
      <Date day={Runs.count} date={'2020-03-01'} />
    </Wrapper>
  )
}

export default BarChart
