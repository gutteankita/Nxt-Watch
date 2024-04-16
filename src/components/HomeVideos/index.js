import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FaSearch} from 'react-icons/fa'
import HomeCardsList from '../HomeCardsList'

import {
  HomeVideosContainer,
  SearchInputContainer,
  Input,
  Button,
  LoaderView,
  FailureView,
  Img,
  Heading,
  Para,
  NoSearchVideos,
  NoSearchVideosImg,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideos extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
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

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  // onClickSearch = () => {
  //   const {videosList,searchInput} = this.state
  //   const filteredVideoList = videosList.filter(each =>
  //     each.title.toLowerCase().includes(searchInput.toLowerCase()),
  //   )
  //   this.setState({
  //     videosList: filteredVideoList
  //   })
  // }
  onClickSearch = () => {
    const {videosList, searchInput} = this.state
    if (searchInput !== '') {
      const filteredVideoList = videosList.filter(each =>
        each.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
      this.setState({
        videosList: filteredVideoList,
      })
    } else {
      // If search input is empty, reset videosList to its original state
      this.setState({
        videosList,
        searchInput: '',
      })
    }
  }

  handleRetryBtn = () => {
    this.getVideos()
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
        We are having some trouble processing your request. Please try again.
      </Para>
      <button type="button" onClick={this.handleRetryBtn}>
        Retry
      </button>
    </FailureView>
  )

  renderVideosView = () => {
    const {videosList} = this.state
    return (
      <>
        <HomeVideosContainer>
          {videosList.length === 0 ? (
            <NoSearchVideos>
              <NoSearchVideosImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                alt="no videos"
                className="img"
              />
              <h1>No Search results found</h1>
              <p>Try different key words or remove search filter</p>
              <button type="button" onClick={this.handleRetryBtn}>
                Retry
              </button>
            </NoSearchVideos>
          ) : (
            videosList.map(eachVideo => (
              <HomeCardsList videosList={eachVideo} key={eachVideo.id} />
            ))
          )}
        </HomeVideosContainer>
      </>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <SearchInputContainer>
          <Input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <Button data-testid="searchButton" onClick={this.onClickSearch}>
            <FaSearch size={24} color="#424242" />
          </Button>
        </SearchInputContainer>
        {this.renderVideos()}
      </>
    )
  }
}

export default HomeVideos
