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
    <p />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <StyledList>
        <Fragment order={0}>
          <li />
        </Fragment>
        {/* <Fragment order={2}>
          <li>Martin Schuhfuss (usefulthink)</li>
        </Fragment> */}
        <Fragment order={3}>
          <li>
            <h3>
              <TextMarker>Matt McKegg</TextMarker> (DESTROY WITH SCIENCE)
            </h3>
          </li>
        </Fragment>
        <Fragment order={4}>
          <li>
            <h3>
              <TextMarker>Ruth John</TextMarker> (Rumyra)
            </h3>
          </li>
        </Fragment>
        <Fragment order={5}>
          <li>
            <h3>
              <TextMarker>Sam Wray</TextMarker> (2xAA & NOSIGNAL)
            </h3>
          </li>
        </Fragment>
        {/* <Fragment order={6}>
          <li>Silke Voigts</li>
        </Fragment> */}
        <Fragment order={7}>
          <li class="no-border">
            <h3>
              <TextMarker>Tim Pietrusky</TextMarker> (NERDDISCO)
            </h3>
          </li>
        </Fragment>
      </StyledList>

      {/* <Title>
        <TextMarker>this.stage</TextMarker>
      </Title> */}

      {/* <Subtitle></Subtitle> */}

      {/* <StyledList>
        <Fragment order={2}>
          <li></li>
        </Fragment>
        <Fragment order={3}>
          <li></li>
        </Fragment>
        <Fragment order={4}>
          <li></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> */}

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
