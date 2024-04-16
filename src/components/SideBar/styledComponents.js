import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 250px;
  flex-shrink: 0;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#212121' : '#ffffff'};
  @media (max-width: 576px) {
    display: none;
  }
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

export const Para = styled.p`
  font-size: 19px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  height: 38px;
  width: 36px;
  margin-right: 10px;
`

export const Description = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#475569')};
`
