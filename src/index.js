import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import './styles/codemirror'
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'
import LuminaveButton from './components/luminaveButton'

// prettier-ignore
const mySlides = [
  'cover', 
  'we-are-livejs',
  'improjam',
  'loop-drop',
  'dominator',
  'vizra',
  'modv',
  'luminave',
  'schedule',
  'schedule-3',
  'schedule-4',
  'schedule-5',
  'schedule-2',
  'thank-you'
]

const {present, live} = search.parse(window.location.href)

const baseStyles = css`
  --slide-color: #fff;
  --font-family: 'Montserrat', sans-serif;
  --title-font-size: 6em;
  --theme-primary: #e10179;
  --theme-primary-dark: #333;
  --theme-on-primary: #fff;
  --theme-background: #000;
  --theme-surface: #000;

  --color-green: #35c9a4;
  --color-red: #da4453;
  --color-yellow: #ec9f00;
  --color-blue: #3caee5;

  background: var(--theme-background);

  a {
    text-decoration: underline;
    color: var(--theme-on-primary);
  }

  h1 {
    font-size: 4.25em;
  }

  h2 {
    font-size: 3em;
  }

  h3 {
    font-size: 2.25em;
    margin: 0.5em 0 0 0;
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 100%;

    .child {
      position: absolute;
      bottom: 15vh;
      left: 0;
    }
  }

  .columns {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    justify-items: center;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={30}>
        <Elements mode={['live']}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>

          <StyledFooter isActive={true}>
            <h1>
              <a href="https://twitter.com/LiveJS_network">@LiveJS_network</a>
            </h1>
            <h1>
              <a href="https://livejs.network">livejs.network</a>
            </h1>
          </StyledFooter>
        </Elements>

        <Plugins mode={['present']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave
            publish
            showFrame={this.state.showFrame}
            handleFrame={this.setFrame}
          />
          <LuminaveButton onClick={this.setFrame}>Luminave</LuminaveButton>
        </Plugins>

        <Plugins mode={['live']}>
          <LocalStorage subscribe />
          <Luminave
            subscribe
            handleFrame={this.handleFrame}
            slides={this.slides}
          />
        </Plugins>

        <Plugins mode={['default']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
        </Plugins>

        {this.slides}

        <Elements mode={['default']}>
          <StyledFooter isActive={true}>
            <h1>
              <a href="https://twitter.com/LiveJS_network">@LiveJS_network</a>
            </h1>
            <h1>
              <a href="https://livejs.network">livejs.network</a>
            </h1>
          </StyledFooter>
        </Elements>
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(
    mySlides.map(async (slide, index) => {
      let module = await import(`./slides/${slide}.js`)
      slides[index] = module.default
    })
  )

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})
