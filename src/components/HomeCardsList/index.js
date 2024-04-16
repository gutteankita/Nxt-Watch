import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  VideosContainer,
  Img,
  ProfileContent,
  ProfileImg,
  TitleContent,
  Title,
  Name,
  ViewsYear,
  ViewCount,
  PublishedAt,
} from './styledComponents'
// <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

class HomeCardsList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const {videosList} = this.props
          const {
            channel,
            id,
            profileImageUrl,
            publishedAt,
            thumbnailUrl,
            title,
            viewCount,
          } = videosList
          const {name} = channel
          return (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideosContainer>
                <Img src={thumbnailUrl} alt="video thumbnail" />
                <ProfileContent>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <TitleContent>
                    <Title theme={theme}>{title}</Title>
                    <Name>{name}</Name>
                    <ViewsYear>
                      <ViewCount>{viewCount} views</ViewCount>

                      <PublishedAt>{publishedAt}</PublishedAt>
                    </ViewsYear>
                  </TitleContent>
                </ProfileContent>
              </VideosContainer>
            </Link>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeCardsList
