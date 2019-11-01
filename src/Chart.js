import React from 'react'
import styled from 'styled-components/macro'

import Runs from './lib/runs'
import Bar from './Chart/Bar'
import Label from './Chart/Label'
import Line from './Chart/Line'
import Stat from './Chart/Stat'
import LabeledLine from './Chart/LabeledLine'

const Container = styled.div`
  padding: 5rem 0rem;
  padding-left: 3.5rem;
  padding-right: 2rem;
  margin: 0 auto;
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

// <Stat header={'DAY 1'} subheader={'2019-10-18'} />
// <Stat header={`DAY ${Runs.count}`} subheader={'2020-03-01'} />

const distanceToPX = distance => {
  const decimal = 1 - distance / 26.2
  return decimal * 200
}

function Chart() {
  const Bars = Runs.items.map(run => (
    <Bar key={run.date} run={run} maxDistance={26.2} count={Runs.count} />
  ))

  return (
    <Container>
      <Wrapper>
        <ChartArea>
          <LabeledLine top={distanceToPX(26.2)} left={-25} text={'M'} />
          <LabeledLine top={distanceToPX(13.1)} left={-40} text={'H-M'} />
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

export default Chart
