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

const {Slide, A} = Full
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3 />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <h3>
        <TextMarker>Jan Krutisch</TextMarker> = halfbyte 🔊
      </h3>
      <br />
      <Fragment order={0}>
        <Title>
          <RainbowText time={1} text="improjam" />
        </Title>
        <h4>
          <a href="https://github.com/halfbyte/improjam">
            github.com/halfbyte/improjam
          </a>
        </h4>
      </Fragment>
      {/* <Title>
        <TextMarker>this.stage</TextMarker>
      </Title> */}

      {/* <Subtitle></Subtitle> */}

      {/* <StyledList>
        <Fragment order={2}>
          <li class="light-border space-top"></li>
        </Fragment>
        <Fragment order={3}>
          <li class="light-border"></li>
        </Fragment>
        <Fragment order={4}>
          <li class="light-border"></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> */}

      {/* <LargeImage 
          src="media/"
          alt=""
      /> */}
    </A>

    {/* <B>

    </B> */}
  </Slide>
)
