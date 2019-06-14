import {injectGlobal} from 'styled-components'

const material = `
/*

    Name:       material
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)

*/

.cm-s-material.CodeMirror {
  background-color: #263238;
  color: rgba(233, 237, 237, 1);
}
.cm-s-material .CodeMirror-gutters {
  background: #263238;
  color: rgb(83,127,126);
  border: none;
}
.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }
.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }
.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }
.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }

.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }
.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }
.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }
.cm-s-material .cm-variable-2 { color: #80CBC4; }
.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }
.cm-s-material .cm-builtin { color: #DECB6B; }
.cm-s-material .cm-atom { color: #F77669; }
.cm-s-material .cm-number { color: #F77669; }
.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }
.cm-s-material .cm-string { color: #C3E88D; }
.cm-s-material .cm-string-2 { color: #80CBC4; }
.cm-s-material .cm-comment { color: #546E7A; }
.cm-s-material .cm-variable { color: #82B1FF; }
.cm-s-material .cm-tag { color: #80CBC4; }
.cm-s-material .cm-meta { color: #80CBC4; }
.cm-s-material .cm-attribute { color: #FFCB6B; }
.cm-s-material .cm-property { color: #80CBAE; }
.cm-s-material .cm-qualifier { color: #DECB6B; }
.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }
.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }
.cm-s-material .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #EC5F67;
}
.cm-s-material .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}

`


const monokai = `
.cm-s-monokai.CodeMirror {
  background: #272822;
  color: #f8f8f2;
}
.cm-s-monokai div.CodeMirror-selected {
    background: rgba(0, 0, 0, 1);
    box-shadow: 
      0 6px 0 0 var(--theme-primary)
    ;
    border-top: 1px solid #f00;
}
.cm-s-monokai .CodeMirror-line::selection,
.cm-s-monokai .CodeMirror-line > span::selection,
.cm-s-monokai .CodeMirror-line > span > span::selection {
  background: rgba(220, 0, 0, 0.6);
}
.cm-s-monokai .CodeMirror-gutters {
  background: #272822;
  border-right: 0px;
}
.cm-s-monokai .CodeMirror-guttermarker {
  color: white;
}
.cm-s-monokai .CodeMirror-guttermarker-subtle {
  color: #d0d0d0;
}
.cm-s-monokai .CodeMirror-linenumber {
  color: #d0d0d0;
}
.cm-s-monokai .CodeMirror-cursor {
  border-left: 1px solid #f8f8f0;
}

.cm-s-monokai span.cm-comment {
  color: #75715e;
}
.cm-s-monokai span.cm-atom {
  color: #ae81ff;
}
.cm-s-monokai span.cm-number {
  color: #ae81ff;
}

.cm-s-monokai span.cm-property,
.cm-s-monokai span.cm-attribute {
  color: #a6e22e;
}
.cm-s-monokai span.cm-keyword {
  color: #f92672;
}
.cm-s-monokai span.cm-builtin {
  color: #66d9ef;
}
.cm-s-monokai span.cm-string {
  color: #e6db74;
}

.cm-s-monokai span.cm-variable {
  color: #f8f8f2;
}
.cm-s-monokai span.cm-variable-2 {
  color: #9effff;
}
.cm-s-monokai span.cm-variable-3,
.cm-s-monokai span.cm-type {
  color: #66d9ef;
}
.cm-s-monokai span.cm-def {
  color: #fd971f;
}
.cm-s-monokai span.cm-bracket {
  color: #f8f8f2;
}
.cm-s-monokai span.cm-tag {
  color: #f92672;
}
.cm-s-monokai span.cm-header {
  color: #ae81ff;
}
.cm-s-monokai span.cm-link {
  color: #ae81ff;
}
.cm-s-monokai span.cm-error {
  background: #f92672;
  color: #f8f8f0;
}

.cm-s-monokai .CodeMirror-activeline-background {
  background: #373831;
}
.cm-s-monokai .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
`

const neo = `

.CodeMirror.cm-s-neo {
  min-height: 10px;
}

.cm-s-neo div.CodeMirror-selected {
  background: var(--theme-primary);
  box-shadow: 
    -6px 0 0 0 var(--theme-primary),
    6px 0 0 0 var(--theme-primary)
  ;
}
.cm-s-neo.CodeMirror {
  background-color: #ffffff;
  color: #2e383c;
  line-height: 1.4375;
}
.cm-s-neo .cm-comment {
  color: #75787b;
}
.cm-s-neo .cm-keyword,
.cm-s-neo .cm-property {
  color: #1d75b3;
}
.cm-s-neo .cm-atom,
.cm-s-neo .cm-number {
  color: #75438a;
}
.cm-s-neo .cm-node,
.cm-s-neo .cm-tag {
  color: #9c3328;
}
.cm-s-neo .cm-string {
  color: #b35e14;
}
.cm-s-neo .cm-variable,
.cm-s-neo .cm-qualifier {
  color: #047d65;
}

/* Editor styling */

.cm-s-neo pre {
  padding: 0;
}

.cm-s-neo .CodeMirror-gutters {
  border: none;
  border-right: 10px solid transparent;
  background-color: transparent;
}

.cm-s-neo .CodeMirror-linenumber {
  padding: 0;
  color: #e0e2e5;
}

.cm-s-neo .CodeMirror-guttermarker {
  color: #1d75b3;
}
.cm-s-neo .CodeMirror-guttermarker-subtle {
  color: #e0e2e5;
}

.cm-s-neo .CodeMirror-cursor {
  width: auto;
  border: 0;
  background: rgba(155, 157, 162, 0.37);
  z-index: 1;
}
`

const dracula = `

.CodeMirror.cm-s-dracula {
  min-height: 10vh;
}

.cm-s-dracula .CodeMirror-selected { 
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 
    -8px 0 0 0 var(--theme-primary)
  ;
}

.cm-s-dracula span.cm-comment { 
  color: var(--theme-primary-dark); 
}

.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
}
.cm-s-dracula .CodeMirror-gutters { color: #282a36; }
.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }
.cm-s-dracula span.cm-number { color: #bd93f9; }
.cm-s-dracula span.cm-variable { color: #50fa7b; }
.cm-s-dracula span.cm-variable-2 { color: white; }
.cm-s-dracula span.cm-def { color: #50fa7b; }
.cm-s-dracula span.cm-operator { color: #ff79c6; }
.cm-s-dracula span.cm-keyword { color: #ff79c6; }
.cm-s-dracula span.cm-atom { color: #bd93f9; }
.cm-s-dracula span.cm-meta { color: #f8f8f2; }
.cm-s-dracula span.cm-tag { color: #ff79c6; }
.cm-s-dracula span.cm-attribute { color: #50fa7b; }
.cm-s-dracula span.cm-qualifier { color: #50fa7b; }
.cm-s-dracula span.cm-property { color: #66d9ef; }
.cm-s-dracula span.cm-builtin { color: #50fa7b; }
.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
`

injectGlobal`${dracula}`
