import React from 'react'
import styled, {css} from 'styled-components'

export const ImportantLink = styled.a`
  color: var(--theme-on-primary);
  background: var(--theme-primary);
  border-radius: 1rem;
  box-shadow: 0 0 0 1rem var(--theme-primary);
  line-height: 1.25em;
  display: inline-block;
  max-width: 80vw;
  text-decoration: none;

  :hover {
      filter: invert(100%);
  }
`
