import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import LogoutPopup from '../LogoutPopup'

import {
  NavbarDeskTopContainer,
  NavbarMobileContainer,
  Img,
  NavbarChangeBtns,
  ThemeButton,
  ProfileImg,
  LogoutMobileButton,
} from './styledComponents'

class NavBar extends Component {
  onLogoutClicked = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const handleThemeToggle = () => {
            toggleTheme()
          }
          const navBarBgColor = isDarkTheme ? '#212121' : '#ffffff'

          const navBarWebsiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeIcon = isDarkTheme ? (
            <FiSun size={25} color="#f1f1f1" />
          ) : (
            <FaMoon size={25} />
          )
          const iconTheme = isDarkTheme ? '#f9f9f9' : ''
          return (
            <>
              <NavbarDeskTopContainer bgColor={navBarBgColor}>
                <Link to="/">
                  <Img src={navBarWebsiteLogo} alt="website logo" />
                </Link>
                <NavbarChangeBtns>
                  <ThemeButton
                    data-testid="theme"
                    type="button"
                    onClick={handleThemeToggle}
                  >
                    {themeIcon}
                  </ThemeButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <LogoutPopup />
                </NavbarChangeBtns>
              </NavbarDeskTopContainer>

              <NavbarMobileContainer bgColor={navBarBgColor}>
                <Img src={navBarWebsiteLogo} alt="website logo" />
                <NavbarChangeBtns>
                  <ThemeButton
                    data-testid="theme"
                    type="button"
                    onClick={handleThemeToggle}
                  >
                    {themeIcon}
                  </ThemeButton>
                  <FaBars size={33} color={iconTheme} />
                  <LogoutMobileButton onClick={this.onLogoutClicked}>
                    <FiLogOut size={33} color={iconTheme} />
                  </LogoutMobileButton>
                </NavbarChangeBtns>
              </NavbarMobileContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar

//  <LogoutButton theme={theme}>Logout</LogoutButton>
