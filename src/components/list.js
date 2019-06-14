import React from 'react'
import styled, {css, keyframes} from 'styled-components'

const lightshow = keyframes`
    0%,100% {
      filter: hue-rotate(-0deg);
    }

    50% {
      filter: hue-rotate(360deg);
    }
}
`

export const StyledList = styled.ul`
  list-style: none;
  text-align: right;
  font-size: 3rem;
  padding-right: 0.25em;
  margin: 0 0 0 0;
  width: 100%;

  > span {
    display: block !important;
  }

  > span[style='--time:0;'] {
  }

  li {
    position: relative;
    text-align: left;
    display: inline-block;
    margin: 0.75em 0;
    padding-bottom: 0.25em;
    padding-right: 0.5em;
    width: 100%;
    /* border-bottom: 6px solid var(--theme-primary); */
    /* animation: ${lightshow} ease-in-out ${({time = 5.85}) => time}s infinite
      backwards ${({delay = 0}) => delay}s; */

    &:before {
      content: '';
      position: absolute;
      left: -1em;
      top: 0;
    }

    &.no-border {
      border-bottom: none;
    }

    &.light-border {
      border-bottom: 1px solid var(--theme-primary);
    }

    &.space-top {
      margin-top: 0.5em;
    }
  }
`

export const StyledListLarge = styled.ul`
  list-style: none;
  text-align: right;
  font-size: 2em;
  padding-right: 0.25em;
  margin: 0 0 0 0;
  width: 95%;

  > span {
    display: block !important;
  }

  > span[style='--time:0;'] {
  }

  li {
    position: relative;
    text-align: left;
    display: inline-block;
    margin: 0 1.5em 0.75em 0;
    padding-bottom: 0.25em;
    padding-right: 0.5em;
    width: 90%;
    border-bottom: 5px solid var(--theme-primary-dark);

    &:before {
      content: '';
      position: absolute;
      left: -1em;
      top: 0;
    }
  }
`
