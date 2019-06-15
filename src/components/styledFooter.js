import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: var(--footer-background);
  color: var(--footer-color);
  height: var(--footer-height);
  font-family: var(--font-family);
  display: flex;
  align-items: center;
  align-content: center;
  padding: 1rem;
  margin: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  z-index: 1337;
  justify-content: space-between;
  opacity: 0.3;
`

export default StyledFooter
