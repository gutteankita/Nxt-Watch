import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import VideoCards from '../VideoCards'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  HomeBodyContainer,
  LoaderView,
  FailureView,
  Img,
  Heading,
  Para,
  Button,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideosItemDetails extends Component {
  state = {
    videosDetailsList: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getFormattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    profileImageUrl: data.channel.profile_image_url,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
    description: data.description,
  })

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = this.getFormattedData(fetchedData.video_details)

      this.setState({
        videosDetailsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getData()
  }

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
        We are having some trouble to complete your request. Please try again.
      </Para>
      <Button onClick={this.onClickRetry}>Retry</Button>
    </FailureView>
  )

  // renderVideosItemDetailsView = () => {
  //   return (
  //     <ThemeContext.Consumer>
  //       {value => {
  //         const {isDarkTheme} = value
  //         const {videosDetailsList} = this.state
  //         const theme = isDarkTheme ? 'dark' : 'light'
  //         return (
  //           <>
  //             <HomeBodyContainer theme={theme} data-testid="videoItemDetails">
  //               <VideoCards videosDetailsList={videosDetailsList} />
  //             </HomeBodyContainer>
  //           </>
  //         )
  //       }}
  //     </ThemeContext.Consumer>
  //   )
  // }
  renderVideosItemDetailsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosDetailsList} = this.state
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <>
            <HomeBodyContainer theme={theme} data-testid="videoItemDetails">
              <VideoCards videosDetailsList={videosDetailsList} />
            </HomeBodyContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosCards = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosItemDetailsView()
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
        <HomeMainContainer>
          <SideBar />
          {this.renderVideosCards()}
        </HomeMainContainer>
      </>
    )
  }
}

export default VideosItemDetails
