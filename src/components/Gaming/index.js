import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import NavBar from '../NavBar'

import SideBar from '../SideBar'

import {
  MainContainer,
  ContentContainer,
  SavedHeader,
  Heading,
  VideosContainer,
  Ul,
  Li,
  Img,
  Title,
  ViewCount,
  LoaderView,
  FailureView,
  Para,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGaming()
  }

  // formattedData = data => {
  //   return {
  //     id: data.id,
  //     thumbnailUrl: data.thumbnail_url,
  //     title: data.title,
  //     viewCount: data.view_count,
  //   }
  // }
  formattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getGaming = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchData = await response.json()
      const updatedData = fetchData.videos.map(this.formattedData)
      console.log(fetchData, 'ggg')

      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleRetryBtn = () => {
    this.getGaming()
  }

  renderGamingVideosListView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {gamingList} = this.state
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <>
            <ContentContainer>
              <SavedHeader theme={theme}>
                <HiFire
                  size={26}
                  color="#ff0000"
                  style={{
                    backgroundColor: '#000000',
                    padding: '10px',
                    borderRadius: '50%',
                  }}
                />
                <Heading theme={theme}>Gaming</Heading>
              </SavedHeader>

              <VideosContainer theme={theme} data-testid="gaming">
                <Ul>
                  {gamingList &&
                    gamingList.map(video => (
                      <Link
                        key={video.id}
                        to={`/videos/${video.id}`}
                        style={{textDecoration: 'none'}}
                      >
                        <Li key={video.id}>
                          <Img src={video.thumbnailUrl} alt="video thumbnail" />
                          <Title theme={theme}>{video.title}</Title>
                          <ViewCount theme={theme}>
                            {video.viewCount} Watching WorldWide
                          </ViewCount>
                        </Li>
                      </Link>
                    ))}
                </Ul>
              </VideosContainer>
            </ContentContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderView data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderView>
  )

  renderFailureView = () => (
    <FailureView>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para>
        We are having some trouble to complete your request please try again.
      </Para>
      <button type="button" onClick={this.handleRetryBtn}>
        Retry
      </button>
    </FailureView>
  )

  renderAllGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <MainContainer>
          <SideBar />
          {this.renderAllGamingVideos()}
        </MainContainer>
      </>
    )
  }
}

export default Gaming
