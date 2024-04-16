import {Component} from 'react'

import NavBar from '../NavBar'
import SideBar from '../SideBar'
import HomeHeader from '../HomeHeader'
import HomeVideos from '../HomeVideos'
import ThemeContext from '../../context/ThemeContext'

import {HomeMainContainer, HomeBodyContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <NavBar />
              <HomeMainContainer>
                <SideBar />
                <HomeBodyContainer data-testid="home" theme={theme}>
                  <HomeHeader />
                  <HomeVideos />
                </HomeBodyContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
