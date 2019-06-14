import React, {Component} from 'react'
import styled from 'styled-components'
import {Sequence} from '@dekk/fragment'
import YouTube from 'react-yt'
import {search} from '@dekk/url'


const {present, live} = search.parse(window.location.href)

export class Video extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.quiet) return true

    if (this.props.isPlaying) {
      this.props.playVideo()
    } else {
      this.props.pauseVideo()
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.quiet) return true

    if (oldProps.isPlaying !== this.props.isPlaying) {
      if (this.props.quiet) return

      if (this.props.isPlaying) {
        this.props.playVideo()
      } else {
        this.props.pauseVideo()
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.quiet) return true

    if (nextProps.getPlayerState() > -1) {
      return true
    }
    return false
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const StyledVideo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;

  iframe {
    width: 100%;
    height: 100%;
  }
`

export default class YT extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return present ?

      this.props.children({
        ...this.props,
        quiet: true,
        children: [
          <div>YouTube</div>
        ]
      }) : (
      <YouTube
        videoId={this.props.videoId}
        controls={0}
        disablekb={1}
        rel={0}
        start={this.props.start}
        modestbranding={0}
        showinfo={0}
        origin={window.location.origin}
        render={props => {
          return (
            <React.Fragment>
              <StyledVideo>{props.iframe}</StyledVideo>
              {this.props.children({
                ...this.props,
                ...props,
                children: [],
                iframe: null
              })}
            </React.Fragment>
          )
        }}
      />
    )
  }
}

//<YT videoId="NhJPEAR4fbI">
//{props => {
//  return (
//    <React.Fragment>
//      <Sequence order={0} steps={3}>
//        {(index, time, timeline) => {
//          return <Video {...props} isPlaying={index === 1} />
//        }}
//      </Sequence>
//    </React.Fragment>
//  )
//}}
//</YT>
