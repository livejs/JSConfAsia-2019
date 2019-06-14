import React from 'react'
import Code from '@dekk/code'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'


const Code2 = props => {
  return (
    <div style={{minWidth: 50 + "vw", maxWidth: 70 + "vw", fontSize: 0.75 + "em"}}>
      <Code {...props} />
    </div>
  )
}

export default Code2
