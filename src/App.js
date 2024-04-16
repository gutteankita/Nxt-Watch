import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import VideosItemDetails from './components/VideosItemDetails'
import SavedVideosView from './components/SavedVideosView'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDarkTheme: false,
    videosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  saveVideosBtn = data => {
    const {videosList} = this.state
    this.setState({videosList: [...videosList, data]})
  }

  render() {
    const {isDarkTheme, videosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          videosList,
          saveVideosBtn: this.saveVideosBtn,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideosItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosView}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
