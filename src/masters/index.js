import React from 'react'
import layouts, {vertical} from '@dekk/master-slides/lib/layouts'
import {createStyledMaster, Master, Slot} from '@dekk/master'

export const Full = createStyledMaster(
  <Master>
    <Slot name="A" />
  </Master>
)`
    ${layouts.A};
    [data-slot='A'] {
        ${vertical.start};
        align-items: flex-center;
    }
`

export const Half = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
  </Master>
)`
    ${layouts.AB.leftRight};
    [data-slot='A'],
    [data-slot='B'] {
        ${vertical.start};
        align-items: flex-center;
    }
`

export const HalfVertical = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
  </Master>
)`
  ${layouts.AB.topBottom};
  [data-slot='A'] {
    ${vertical.end};
  }
  [data-slot='B'] {
    ${vertical.start};
  }
`

/**
 * A collage slide. (two images)
 * @type {Slide}
 */
export const Collage = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
    <Slot name="C" />
  </Master>
)`
  ${layouts.ABC.top};
  [data-slot='A'] {
    ${vertical.center};
  }
  [data-slot='B'] {
    ${vertical.start};
  }
  [data-slot='C'] {
    ${vertical.start};
  }
`

export const Grid = createStyledMaster(
  <Master>
    <Slot name="A" />
    <Slot name="B" />
    <Slot name="C" />
    <Slot name="D" />
  </Master>
)`
  ${layouts.ABCD};
`
