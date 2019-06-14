import styled from 'styled-components'
import React from 'react'
import {Quote as DekkQuote} from '@dekk/text'

const StyledQuote = styled.div`
    font-size: 3.5rem;
    --quote-border-color: #fff;
    position: relative;

    :before, 
    :after {
      position: absolute;
      font-size: 4em;
      color: #ccc;
      
    }

    :before {
      content: "“";
      top: 0;
      left: 0;
    }

    :after {
      content: "”";
      bottom: 0;
      right: 0;
      line-height: 0;
    }
`

const StyledSource = styled.div`
    font-size: .65em;
    color: #ccc;
    margin: 0 0 0 3em;
    font-style: italic;
`

const Quote = props => {
    return (
      <StyledQuote>
        <DekkQuote {...props} />

        <StyledSource>{props.source}</StyledSource>
      </StyledQuote>
    )
}

export default Quote