import React from 'react'
import {Code, colorSchemes} from '@dekk/text'

export default ({code}) =>
  <Code language='javascript'
        style={colorSchemes.docco}>
    {code}
  </Code>
