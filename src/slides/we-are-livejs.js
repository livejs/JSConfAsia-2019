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
import {topCenter, LargeImage, MediumImage} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Full
// const {Slide, A, B} = Half

const notes = <Notes />

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <br />
      <Fragment order={0}>
        <Subtitle>
          <TextMarker>We are</TextMarker> a collective of web artists using{' '}
          <TextMarker>JS</TextMarker>.
        </Subtitle>
      </Fragment>
      <br />
      <br />
      <Fragment order={1}>
        <Subtitle>
          <TextMarker>We do</TextMarker> music & visuals & lights{' '}
          <TextMarker>live</TextMarker>.
        </Subtitle>
      </Fragment>
    </A>
  </Slide>
)
