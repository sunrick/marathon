import React from 'react'
import styled from 'styled-components/macro'

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

export default Label
