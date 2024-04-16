import styled from 'styled-components'

export const VideoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#231f20')};
  margin: 40px;
  font-weight: 500;
`

export const Title = styled.p`
  font-size: 20px;
  margin-top: 10px;
`

export const TotalPerformActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Line = styled.div`
  border-bottom: 2px solid
    ${props => (props.theme === 'dark' ? '#f9f9f9' : '#231f20')};
  margin-top: 10px;
`

export const ViewsYears = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18%;
`

export const LikeDisLikeSave = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`

export const Button = styled.button`
  color: ${props => (props.state ? '#2563eb' : '#64748b')};
  background: transparent;
  outline: none;
  border-style: none;
  margin-right: 10px;
`

export const Like = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`

export const DisLike = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Save = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ViewCount = styled.p``

export const YearAgo = styled.p``

export const Para = styled.p`
  margin-right: 15px;
  margin-left: 5px;
  color: ${props => (props.state ? '#2563eb' : '#64748b')};
`

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`

export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 15px;
`

export const Name = styled.p`
  margin: 0px;
  padding: 0px;
`

export const NameSubscibers = styled.div``
