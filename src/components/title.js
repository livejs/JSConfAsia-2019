import styled from 'styled-components'
import React from 'react'
import {Title as DekkTitle} from '@dekk/text'

const StyledTitle = styled.span`
    > h1 {
    }
`

export const Title = props => {
    return (
      <StyledTitle>
          <DekkTitle {...props}></DekkTitle>
      </StyledTitle>
    )
}