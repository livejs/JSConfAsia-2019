import React, {cloneElement} from 'react'
import PropTypes from 'prop-types'
import Timer, {renderCountdown} from '@dekk/countdown'

/*
 * @TODO: Automatically stop when time is over and trigger event (so that other actions like "next slide" can be triggered)
 * @TODO: Start timer on click
 * @TODO: Start timer on slide active
 * @TODO: Use WebAudio + mic and literally clap hands to activate the timer + auto change to next slide
 */
export default class SuperTimer extends Timer {
  /**
   * @private
   */
  static get propTypes() {
    return {
      timer: PropTypes.number.isRequired,
      timerWarning: PropTypes.number,
      isPlaying: PropTypes.bool
    }
  }

  /**
   * @private
   */
  static get defaultProps() {
    return {
      timer: 0.5,
      timerWarning: 0
    }
  }

  /**
    * @param {Object} props
    *   The properties
    * @param {number} props.timer
    * @param {number} [props.timerWarning=0]
    *
    */
   constructor(props) {
     super(props)
   }

   /**
    * @private
    * @return {Wrapper}
    *   The entire Deck inside a Wrapper
    */
   render() {
     const countdown = {
       isRunning: this.props.isPlaying,
       end: this.props.timer,
       timerWarning: this.props.timerWarning || 0,
       render: renderCountdown
     }

     return (
       <Timer {...countdown} />
     )
   }
}
