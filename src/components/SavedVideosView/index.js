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
  NoSavedVideos,
  NoSavedVideosImg,
} from './styledComponents'

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

                {videosList.length === 0 ? (
                  <>
                    <NoSavedVideos theme={theme}>
                      <NoSavedVideosImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                        className="img"
                      />
                      <h1>NO saved videos found</h1>
                      <p>You can save your videos while watching them</p>
                    </NoSavedVideos>
                  </>
                ) : (
                  <ContentContainer data-testid="savedVideos">
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
                      <Heading theme={theme}>Saved Videos</Heading>
                    </SavedHeader>
                    <VideosContainer theme={theme}>
                      <Ul>
                        {videosList.map(video => (
                          <Link key={video.id} to={`/videos/${video.id}`}>
                            <Li key={video.id}>
                              <Img
                                src={video.thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <ProfileContent>
                                <TitleContent>
                                  <Title theme={theme}>{video.title}</Title>
                                  <Name theme={theme}>
                                    {video.channel.name}
                                  </Name>
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
                )}
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideosView
