import React, {Component, PureComponent} from 'react'
import {Live, Present, Preview} from '@dekk/dekk'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {Default} from '../components/dekk'

export class SuperVideo extends Component {
  constructor(props) {
    super(props)
    this.isPlaying = false
  }

  componentDidUpdate(oldProps) {
    const video = document.getElementById('video')

    if (video === null) return

    if (this.props.isPlaying) {
        video.play()
        this.isPlaying = true
    } else {
        video.pause()
        this.isPlaying = false
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isPlaying === this.isPlaying) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <React.Fragment>
        <Preview>
          <Title>Video {this.props.isPlaying ? 'playing' : 'paused'}</Title>
          <br />
          <Bold>{this.props.src}</Bold>
        </Preview>

        <Default>
          <video 
            controls={false}
            id="video"
            src={this.props.src}
            preload="auto"
          />
        </Default>

        <Live>
          <video 
            controls={false}
            id="video"
            src={this.props.src}
            preload="auto"
          />
        </Live>
      </React.Fragment>
    )
  }
}