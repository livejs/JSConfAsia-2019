import React, {Component} from 'react'
import {search} from '@dekk/url'

const {present, live, preview} = search.parse(window.location.href)

export const Default = ({children}) => {
  return (present === undefined && live === undefined && preview === undefined) && <React.Fragment>{children}</React.Fragment>
}
  