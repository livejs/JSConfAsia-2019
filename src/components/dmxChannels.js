import React from 'react'
import styled, {css} from 'styled-components'

export const DmxChannels = styled.div`

    --channels: ${({channels}) => channels};
    --width: ${({width}) => width};
    --height: ${({height}) => height};

    width: var(--width, 100%);
    height: var(--height, 50%);
    display: grid;
    grid-template-columns: repeat(var(--channels), 1fr);
    column-gap: 1em;
    justify-items: center;
    counter-reset: number;
`

export const StyledChannel = styled.div`
    --background: ${({background}) => background};

    background: var(--background, #fff);
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    position: relative;
    padding: .25em;
    
    :before {
        counter-increment: number;
        content: counter(number);
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        padding: 0.25em;

        width: 35px;
        height: 35px;
        background: #fff;
        text-align: center;
    }

    &.strobe {
        animation: strobe 500ms steps(1, end) infinite;

        @keyframes strobe {
          74% {
            background: white;
          }
          75% {
            background: black;
          }
        }
    }

    &.uv {
        box-shadow: 0 0 20px #5b1ccf;
    }

    &.active {
        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);
        filter: zoom(100%);
    }

    &.inactive {
        filter: blur(5px) invert(100%);
        transform: scale(0.75);

    }
`

export const StyledLabel = styled.div`
    --background: ${({background}) => background};

    background: #fff;
    width: 100%;
    text-align: center;

    font-weight: bold;
    font-size: 2em;
`

export const Info = styled.div`
    margin: 1em 0 0 0;
    font-size: 0.85em;
`

const StyledValue = styled.div`
    font-size: 3em;
`

export const Channel = props => {

    const { value, label } = props

    return (
      <StyledChannel {...props}>
        <StyledLabel {...props}>{label}</StyledLabel>
        {props.children}
        <StyledValue>{value}</StyledValue>
      </StyledChannel>
    )
}