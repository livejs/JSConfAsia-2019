import styled, {keyframes} from 'styled-components'

const lightshow = keyframes`
    0%,100% {
      filter: hue-rotate(-0deg);
    }

    50% {
      filter: hue-rotate(360deg);
    }
}
`

export const Char = styled.span``

export default styled.span`
  background: #0178ad;
  animation: ${lightshow} ease-in-out ${({time = 5.85}) => time}s infinite
    backwards ${({delay = 0}) => delay}s;

  box-shadow: -6px 0 0 0 #0178ad, 6px 0 0 0 #0178ad;
  color: #fff;
`

// const TextMarker = props => {
//   const time = 1
//   const length = 1
//   const style = props.style
//   return (
//     <React.Fragment>
//       <CharContainer style={style}>
//         {chars.map((char, i) => {
//           const delay = (props.time / length) * (length - i) * -1
//           return (
//             <Char key={i} time={props.time} delay={delay}>
//               {char}
//             </Char>
//           )
//         })}
//       </CharContainer>
//     </React.Fragment>
//   )
// }

// TextMarker.defaultProps = {
//   time: 0.85
// }

// export default RainbowText
