import React from 'react'
import Line from './Line'
import Label from './Label'

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

export default LabeledLine
