import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../NavBar'
import SideBar from '../SideBar'

import {MainContainer, NotFound, NotFoundImg} from './styledComponents'

class SavedVideosView extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {videosList, isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'
          console.log(videosList, 'saveddd')

          return (
            <>
              <NavBar />
              <MainContainer>
                <SideBar />

                <>
                  <NotFound theme={theme}>
                    {isDarkTheme ? (
                      <NotFoundImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                        alt="not found"
                        className="img"
                      />
                    ) : (
                      <NotFoundImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                        alt="not found"
                        className="img"
                      />
                    )}

                    <h1>Page Not Found</h1>
                    <p>
                      we are sorry, the page you requested could not be found.
                    </p>
                  </NotFound>
                </>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideosView
