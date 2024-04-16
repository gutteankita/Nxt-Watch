import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
`

export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  color: #ffffff;
`
