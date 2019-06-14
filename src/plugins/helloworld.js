import {Component} from 'react'
import PropTypes from 'prop-types'

export default class HelloWorld extends Component {
  componentWillReceiveProps({slideIndex}) {
    if (this.props.slideIndex !== slideIndex) {
      // Let's send some data when the slide changes
      console.log(`helloworld ${slideIndex}`)
    }
  }

  render() {
    return null
  }
}
