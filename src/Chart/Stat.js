import React from 'react'
import styled from 'styled-components/macro'

const Stat = ({ header, subheader }) => {
  return (
    <div
      css={`
        flex: 1;
      `}
    >
      <p
        css={`
          font-weight: 700;
          font-size: 1.2em;
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

export default Stat
