import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const NotFound = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const NotFoundImg = styled.img`
  height: 200px;
  width: 300px;
`
