import styled from 'styled-components'

export default styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`

export const Column = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  &.left {
    align-items: flex-end;
  }

  &.right {
    align-items: flex-start;
  }
`

export const Spacer = styled.div`
  width: 5vw;
`
