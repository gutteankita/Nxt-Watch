import styled from 'styled-components'

export const NavbarDeskTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin: 0px;
  background-color: ${props => props.bgColor};

  @media (max-width: 576px) {
    display: none;
  }
`
export const NavbarMobileContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Img = styled.img`
  height: 30px;
  width: 140px;
`

export const NavbarChangeBtns = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  margin: 0px 10px 0 20px;
`

export const BaseButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
`

export const LogoutButton = styled(BaseButton)`
  border: 2px solid ${props => (props.theme === 'dark' ? '#f8fafc' : '#3b82f6')};
  border-radius: 2px;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#3b82f6')};
  font-weight: 600;
  height: 28px;
  width: 64px;
  margin-left: 10px;
`

export const ThemeButton = styled(BaseButton)``

export const LogoutMobileButton = styled(ThemeButton)`
  margin-left: 7px;
`
