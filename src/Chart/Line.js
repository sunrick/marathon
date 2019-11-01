import React from 'react'
import styled from 'styled-components/macro'

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

export default Line
