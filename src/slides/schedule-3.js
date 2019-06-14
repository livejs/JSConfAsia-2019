import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText, TextMarker} from '../components'
import {css} from 'styled-components'
import {Grid, Half, Full, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage
} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'
import {Griddd} from '../components/grid'

const {Slide, A} = Full
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <p />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      {/* <Title>Making of</Title> */}

      {/* <Title>
        <TextMarker>this.stage</TextMarker>
      </Title> */}

      <br />

      <Fragment order={0}>
        <Title>
          🔊 halfbyte
          <br />
          🎆 NOSIGNAL
        </Title>
      </Fragment>

      {/* <LargeImage 
          src="media/"
          alt=""
      /> */}

      {/* <FitImage src="media/" alt="" /> */}
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
