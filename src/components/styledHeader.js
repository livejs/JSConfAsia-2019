import styled from 'styled-components'

const StyledHeader = styled.header`
    background: var(--header-background);
    color: var(--header-color);
    z-index: 1337;
    height: 100vh;
    overflow: auto;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    font-size: 1rem;
    opacity: 0;
    pointer-events: none;

    ${props => {
        if (props.isActive) {
            return `
                pointer-events: all;
                opacity: .95;
            `
        }
    }};
`

export default StyledHeader