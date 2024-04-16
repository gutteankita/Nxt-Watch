import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SavedHeader = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#383838' : '#f9f9f9'};
  display: flex;
  align-items: center;
  padding-left: 40px;
`

export const Heading = styled.h1`
  display: flex;
  color: ${({theme}) => (theme === 'dark' ? '#ffffff' : '')};
  margin-left: 10px;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
`

export const Ul = styled.ul`
  list-style-type: none;
`

export const Li = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 30px;
`

export const Img = styled.img`
  width: 250px;
  height: 140px;
  margin-left: 5px;
`

export const ProfileContent = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 5px;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const ViewsYear = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-size: 17px;
  color: ${({theme}) => (theme === 'dark' ? '#f9f9f9' : '#1e293b')};
`

export const Name = styled.p`
  font-size: 15px;
  color: ${({theme}) => (theme === 'dark' ? '#909090' : '#181818')};
  line-height: 0;
`

export const ViewCount = styled.p`
  line-height: 1;
  font-size: 13px;
  color: ${({theme}) => (theme === 'dark' ? '#909090' : '#181818')};
`

export const PublishedAt = styled.p`
  line-height: 1;
  font-size: 13px;
  color: ${({theme}) => (theme === 'dark' ? '#909090' : '#181818')};
  margin-left: 10px;
`

export const LoaderView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const Para = styled.p``
