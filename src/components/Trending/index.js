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
  ProfileContent,
  TitleContent,
  Title,
  Name,
  ViewsYear,
  ViewCount,
  PublishedAt,
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

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrending()
  }

  formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    profileImageUrl: data.channel.profile_image_url,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrending = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      console.log(updatedData)

      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleRetryBtn = () => {
    this.getTrending()
  }

  renderTrendingVideosListView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingList} = this.state
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
                <Heading theme={theme}>Trending</Heading>
              </SavedHeader>

              <VideosContainer theme={theme} data-testid="trending">
                <Ul>
                  {trendingList &&
                    trendingList.map(video => (
                      <Link
                        key={video.id}
                        to={`/videos/${video.id}`}
                        style={{textDecoration: 'none'}}
                      >
                        <Li key={video.id}>
                          <Img src={video.thumbnailUrl} alt="video thumbnail" />
                          <ProfileContent>
                            <TitleContent>
                              <Title theme={theme}>{video.title}</Title>
                              <Name theme={theme}>{video.channel.name}</Name>
                              <ViewsYear>
                                <ViewCount theme={theme}>
                                  {video.viewCount} views
                                </ViewCount>
                                <PublishedAt theme={theme}>
                                  {video.publishedAt}
                                </PublishedAt>
                              </ViewsYear>
                            </TitleContent>
                          </ProfileContent>
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

  renderAllTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosListView()
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
          {this.renderAllTrendingVideos()}
        </MainContainer>
      </>
    )
  }
}

export default Trending
