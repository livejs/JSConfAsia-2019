import React from 'react'
import styled, {keyframes} from 'styled-components'

const lightshow = keyframes`
  0% {
    color: #fb8a8b;
  }
  16% {
    color: #f76272;
  }
  32% {
    color: #e10079;
  }
  48% {
    color: #e10079;
  }
  64% {
    color: #a231ef;
  }
  80% {
    color: #15216b;
  }
  100% {
    color: #fb8a8b
  }
`

export const Char = styled.span`
  animation: ${lightshow} ease-in-out ${({time = 0.85}) => time}s infinite
    backwards ${({delay = 0}) => delay}s;
`

export const CharContainer = styled.div`
  background: var(--theme-surface);
  box-shadow: 0 0 0 1rem var(--theme-surface);
`

const RainbowText = props => {
  const chars = props.text.split('')
  const time = 1
  const {length} = chars
  const style = props.style
  return (
    <React.Fragment>
      <CharContainer style={style}>
        {chars.map((char, i) => {
          const delay = (props.time / length) * (length - i) * -1
          return (
            <Char key={i} time={props.time} delay={delay}>
              {char}
            </Char>
          )
        })}
      </CharContainer>
    </React.Fragment>
  )
}

RainbowText.defaultProps = {
  time: 0.85
}

export default RainbowText
