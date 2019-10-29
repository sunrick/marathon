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

const Label = ({ top, left, text }) => {
  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      css={`
        position: absolute;
        font-weight: 700;
        font-size: 0.7em;
      `}
    >
      {text}
    </div>
  )
}

const Line = ({ top, type }) => {
  return (
    <div
      style={{ top: `${top}px`, borderTopStyle: type || 'dashed' }}
      css={`
        position: absolute;
        left: 0px;
        right: 0px;
        border-top-width: 1px;
        border-top-color: #fff;
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

const LabeledLine = ({ top, left, text }) => {
  top = top || 0
  left = left || 0

  return (
    <React.Fragment>
      <Label top={top - 5} left={left} text={text} />
      <Line top={top} />
    </React.Fragment>
  )
}

// <Stat header={'DAY 1'} subheader={'2019-10-18'} />
// <Stat header={`DAY ${Runs.count}`} subheader={'2020-03-01'} />

const distanceToPX = distance => {
  const decimal = 1 - distance / 26.2
  return decimal * 200
}

function BarChart() {
  const Bars = Runs.items.map(run => (
    <Run key={run.date} run={run} maxDistance={26.2} count={Runs.count} />
  ))

  return (
    <Container>
      <Wrapper>
        <ChartArea>
          <LabeledLine top={distanceToPX(26.2)} left={-75} text={'MARATHON'} />
          <LabeledLine top={distanceToPX(13.1)} left={-45} text={'HALF'} />
          <LabeledLine top={distanceToPX(6.21)} left={-35} text={'10K'} />
          <LabeledLine top={distanceToPX(3.11)} left={-30} text={'5K'} />
          <Line top={200} type={'solid'} />
          {Bars}
        </ChartArea>
      </Wrapper>
      <Stats>
        <Stat header={'DAYS LEFT'} subheader={Runs.daysLeft().toString()} />
        <Stat
          header={'TOTAL DISTANCE'}
          subheader={`${Runs.totalDistance()} MILES`}
        />
        <Stat header={'TOTAL RUNS'} subheader={`${Runs.totalRuns()}`} />
      </Stats>
    </Container>
  )
}

export default BarChart
