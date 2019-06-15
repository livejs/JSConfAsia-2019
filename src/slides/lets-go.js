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
import StyledFooter from '../components/styledFooter'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage,
  TopCenterImage
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
      <Title>
        <TextMarker>LETS PARTY!</TextMarker>
      </Title>

      <TopCenterImage src="media/twinsparrot.gif" alt="Party Parrots" />

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
      <StyledFooter>
        <a href="https://cultofthepartyparrot.com">cultofthepartyparrot.com</a>
      </StyledFooter>
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
