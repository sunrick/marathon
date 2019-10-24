import React from 'react'
import styled from 'styled-components/macro'

import Runs from './runs'
import Run from './Run'

const Container = styled.div`
  padding: 5rem 10rem;
`

const Stats = styled.div`
  margin-top: 4rem;
  display: flex;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const ChartArea = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: flex-end;
  height: 200px;
  width: 800px;
`

const Label = styled.div`
  position: absolute;
  font-weight: 700;
  font-size: 0.7em;
`

const DistanceLabel = ({ top, left, text }) => {
  return <Label style={{ top: `${top}px`, left: `${left}px` }}>{text}</Label>
}

const DistanceLine = ({ top }) => {
  return (
    <div
      style={{ top: `${top}px` }}
      css={`
        position: absolute;
        left: 0px;
        right: 0px;
        border-top: 1px dashed #fff;
        z-index: -1;
      `}
    />
  )
}

const Stat = ({ header, subheader }) => {
  return (
    <div style={{ marginRight: '3rem' }}>
      <p
        css={`
          font-weight: 700;
          font-size: 0.8em;
          margin-bottom: 0;
          margin-top: 0;
        `}
      >
        {header}
      </p>
      <p
        css={`
          font-size: 0.8em;
          margin-bottom: 0;
          margin-top: 0;
        `}
      >
        {subheader}
      </p>
    </div>
  )
}

// <Stat header={'DAY 1'} subheader={'2019-10-18'} />
// <Stat header={`DAY ${Runs.count}`} subheader={'2020-03-01'} />

function BarChart() {
  const Bars = Runs.items.map(run => (
    <Run key={run.date} run={run} maxDistance={26.2} count={Runs.count} />
  ))

  return (
    <Container>
      <Wrapper>
        <ChartArea>
          <DistanceLabel top={-5} left={-70} text={'26.2 MILES'} />
          <DistanceLabel top={95} left={-68} text={'13.1 MILES'} />
          <DistanceLine top={0} />
          <DistanceLine top={100} />
          {Bars}
        </ChartArea>
      </Wrapper>
      <Stats>
        <Stat header={'DAYS LEFT'} subheader={Runs.daysLeft().toString()} />
        <Stat
          header={'TOTAL DISTANCE'}
          subheader={`${Runs.totalDistance()} MILES`}
        />
      </Stats>
    </Container>
  )
}

export default BarChart
