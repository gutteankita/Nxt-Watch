import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {MenuList, MenuLink, Heading, StyledNavLink} from './styledComponents'

class SideBarMenuList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <MenuList>
              <MenuLink>
                <StyledNavLink exact to="/" theme={theme}>
                  <AiFillHome size={24} />
                  <Heading theme={theme}>Home</Heading>
                </StyledNavLink>
              </MenuLink>
              <MenuLink>
                <StyledNavLink to="/trending" theme={theme}>
                  <HiFire size={24} />
                  <Heading theme={theme}>Trending</Heading>
                </StyledNavLink>
              </MenuLink>
              <MenuLink>
                <StyledNavLink to="/gaming" theme={theme}>
                  <SiYoutubegaming size={24} />
                  <Heading theme={theme}>Gaming</Heading>
                </StyledNavLink>
              </MenuLink>
              <MenuLink>
                <StyledNavLink to="/saved-videos" theme={theme}>
                  <RiMenuAddFill size={24} />
                  <Heading theme={theme}>Saved Videos</Heading>
                </StyledNavLink>
              </MenuLink>
            </MenuList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBarMenuList
