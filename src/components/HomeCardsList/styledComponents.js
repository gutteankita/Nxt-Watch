import styled from 'styled-components'

export const VideosContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 350px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-bottom: 30px;
`
export const Img = styled.img`
  margin-left: 5px;
`
export const ProfileContent = styled.div`
  display: flex;
  margin-left: 5px;
`
export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
`
export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
export const Title = styled.p`
  font-size: 13px;
  color: ${props => (props.theme === 'dark' ? '#ebebeb' : '#1e293b')};
`
export const Name = styled.p`
  font-size: 14px;
  color: #475569;
  line-height: 0;
`
export const ViewsYear = styled.div`
  display: flex;
  align-items: center;
`
export const ViewCount = styled.p`
  line-height: 1;
  font-size: 13px;
  color: #475569;
`

export const PublishedAt = styled.p`
  line-height: 1;
  font-size: 13px;
  color: #475569;
  margin-left: 10px;
`
