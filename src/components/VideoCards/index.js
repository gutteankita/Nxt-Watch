import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike, BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardsContainer,
  Title,
  ViewsYears,
  Button,
  Like,
  DisLike,
  Save,
  ProfileImg,
  NameSubscibers,
  LikeDisLikeSave,
  Para,
  TotalPerformActions,
  Line,
  ProfileName,
  Name,
} from './styledComponents'

class VideoCards extends Component {
  state = {
    likeState: false,
    disLikeState: false,
    saveState: false,
  }

  handleLikeClick = () => {
    this.setState(prevState => ({
      likeState: !prevState.likeState,
      disLikeState: false,
    }))
  }

  handleDisLikeClick = () => {
    this.setState(prevState => ({
      disLikeState: !prevState.disLikeState,
      likeState: false,
    }))
  }

  handleSaveClick = () => {
    this.setState(prevState => ({
      saveState: !prevState.saveState,
    }))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, saveVideosBtn} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const {videosDetailsList} = this.props
          console.log(videosDetailsList, 'villl')
          const {likeState, disLikeState, saveState} = this.state

          if (!videosDetailsList || !videosDetailsList.channel) {
            return null
          }

          const {
            videoUrl,
            title,
            viewCount,
            publishedAt,
            profileImageUrl,
            description,
            channel: {name, subscriberCount},
          } = videosDetailsList

          const onClickSave = () => {
            this.handleSaveClick()
            saveVideosBtn({...videosDetailsList})
          }

          return (
            <>
              <VideoCardsContainer theme={theme}>
                <ReactPlayer width="100%" height="500px" url={videoUrl} />
                <Title>{title}</Title>
                <TotalPerformActions>
                  <ViewsYears>
                    <Para>{viewCount} views</Para>
                    <Para>{publishedAt}</Para>
                  </ViewsYears>
                  <LikeDisLikeSave>
                    <Like onClick={this.handleLikeClick}>
                      <AiOutlineLike
                        size={25}
                        color={likeState ? '#2563eb' : '#64748b'}
                      />
                      <Button state={likeState}>Like</Button>
                    </Like>

                    <DisLike onClick={this.handleDisLikeClick}>
                      <BiDislike
                        size={25}
                        color={disLikeState ? '#2563eb' : '#64748b'}
                      />
                      <Button state={disLikeState}>DisLike</Button>
                    </DisLike>
                    <Save onClick={onClickSave}>
                      <BiListPlus
                        size={28}
                        color={saveState ? '#2563eb' : '#64748b'}
                      />

                      <Button state={saveState}>
                        {' '}
                        {saveState ? 'saved' : 'save'}
                      </Button>
                    </Save>
                  </LikeDisLikeSave>
                </TotalPerformActions>
                <Line theme={theme} />
                <ProfileName>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <NameSubscibers>
                    <Name>{name}</Name>
                    <Name>{subscriberCount} subscribers</Name>
                  </NameSubscibers>
                </ProfileName>
                <Para>{description}</Para>
              </VideoCardsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoCards
