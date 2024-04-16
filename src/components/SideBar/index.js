import {Component} from 'react'
import SideBarMenuList from '../MenuList'
import ThemeContext from '../../context/ThemeContext'

import {
  SideBarContainer,
  BottomSection,
  Para,
  Logo,
  Img,
  Description,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <SideBarContainer bgColor={theme}>
              <SideBarMenuList />
              <BottomSection>
                <Para theme={theme}>CONTACT US</Para>
                <Logo>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Logo>
                <Description theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </BottomSection>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
