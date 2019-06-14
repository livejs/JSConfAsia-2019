import styled from 'styled-components'

export default styled.span`
  animation: strobe 250ms steps(1, end) infinite;

  @keyframes strobe {
    74% {
      background: white;
    }
    75% {
      background: black;
    }
  }
`
