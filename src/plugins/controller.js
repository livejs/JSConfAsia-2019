/* global window */
import React from 'react'
import Paging from '@dekk/paging'

/**
 * This component does not render any content but adds paging via key
 * commands.
 *
 * If a slide has fragments this component will split the slide into
 * different steps.
 * @public
 */
class Controller extends Paging {

  constructor(props) {
    super(props)
    // this.goTo = this.goTo.bind(this)
  }

  goTo({which}) {
    const {
      slideCount,
      slideIndex,
      fragmentIndex,
      fragmentCount,
      toNextSlide,
      toPrevSlide,
      toNextFragment,
      toPrevFragment
    } = this.props

    const hasFragments = Boolean(fragmentCount)

    const lastFragment = Math.max(0, fragmentCount - 1)

    const previousFragment = Math.max(0, fragmentIndex - 1)
    const nextFragment = Math.min(lastFragment, fragmentIndex + 1)

    const lastSlide = Math.max(0, slideCount - 1)
    const previousSlide = Math.max(0, slideIndex - 1)
    const nextSlide = Math.min(lastSlide, slideIndex + 1)

    const handleNext = () => {
      if (hasFragments && nextFragment > fragmentIndex) {
        toNextFragment()
      } else if (nextSlide !== slideIndex) {
        toNextSlide()
      }
    }

    const handlePrev = () => {
      if (hasFragments && previousFragment < fragmentIndex) {
        toPrevFragment()
      } else if (previousSlide !== slideIndex) {
        toPrevSlide()
      }
    }

    const handleLuminave = () => {
      this.props.handleFrame(true)
    }

    // Switch between left and right arrow buttons
    switch (which) {
      case 40:
      case 34:
        handleNext()
        break
      case 38:
      case 33:
        handlePrev()
        break
      case 66:
        handleLuminave()
        break
      default:
        break
    }
  }
}

export default Controller
