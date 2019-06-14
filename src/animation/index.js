import {css, injectGlobal} from 'styled-components'

export const zoom = {}

zoom.in = css`
  --scale: calc(1 - var(--time));
  transform: scale3d(var(--scale, 0), var(--scale, 0), 1);
`

zoom.out = css`
  transform: scale3d(var(--time, 1), var(--time, 1), 1);
`

export const nothing = css``

/*
 *
 * Slide
 *
 */
export const cube = (dir = 'x') => css`
  transform: perspective(200 ${dir === 'x' ? 'vw' : 'vh'})
    translate3d(0, 0, -50 ${dir === 'x' ? 'vw' : 'vh'})
    rotate3d(
      ${dir === 'x' ? 0 : 1},
      ${dir === 'x' ? 1 : 0},
      0,
      calc(90deg * var(--time) * var(--direction))
    )
    translate3d(0, 0, 50 ${dir === 'x' ? 'vw' : 'vh'});
  backface-visibility: hidden;
  transform-style: preserve-3d;
`
//
// export const zoom = css`
//   transform: scale3d(calc(1 - var(--time)), calc(1 - var(--time)), 1);
//   opacity: calc(1 - var(--time));
// `

// /*
//  *
//  * Fragment
//  *
//  */
// export const fadeIn = css`
//    transition:
//      transform 0.25s ease-${props => props.active ? 'out' : 'in'},
//      opacity 0.25s ease-${props => props.active ? 'in' : 'out'};
//    opacity: ${props => props.active ? 1 : 0};
//    transform: translate3d(0, ${props => props.active ? 0 : 100}%, 0);
//  `
//
// export const zoomIn = css`
//    transition:
//      transform 0.25s ease-${props => props.active ? 'out' : 'in'},
//      opacity 0.25s ease-${props => props.active ? 'in' : 'out'};
//    opacity: ${props => props.active ? 1 : 0};
//    transform: scale3d(${props => props.active ? 1 : 0}, ${props => props.active ? 1 : 0}, 1);
//  `
