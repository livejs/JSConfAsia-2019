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

      <Subtitle>
        <TextMarker>Schedule</TextMarker>
      </Subtitle>

      <Griddd>
        <Fragment order={1}>
          <h3>
            🔊 halfbyte
            <br />
            🎆 NOSIGNAL
          </h3>
        </Fragment>
        <Fragment order={3}>
          <h3>
            🔊 DESTROY WITH SCIENCE
            <br />
            🎆 NERDDISCO
          </h3>
        </Fragment>
        <Fragment order={4}>
          <h3>
            🔊 2xAA
            <br />
            🎆 Rumyra
          </h3>
        </Fragment>
      </Griddd>

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
