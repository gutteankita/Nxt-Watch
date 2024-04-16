// import styled from 'styled-components'

// export const MainContainer = styled.div`
//   display: flex;
// `

// export const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `
// export const SavedHeader = styled.div`
//   background-color: ${props => (props.theme === 'dark' ? '#383838' : '#f9f9f9')};

// background-color: #;
// display: flex;
// align-items: center;
// padding-left: 40px;

// `
// export const Heading = styled.h1`
// display: flex;
//   color: ${({theme}) => (theme === 'dark' ? '#ffffff' : '')};
// margin-left: 10px;
// `

// export const VideosContainer = styled.div`

//   margin-bottom: 30px;
//   background-color: ${props =>
//     props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};

// min-height: 100vh;

// `
// export const Ul = styled.ul`
// list-style-type: none;
// display: flex;
// flex-wrap: wrap;

// `
// export const Li = styled.li`
// list-style-type: none;
// display: flex;
// flex-direction: column;
// margin: 10px;

// `

// export const Img = styled.img`
//   width: 240px;
//   height: 300px;

// `

// export const ProfileContent = styled.div`
// display: flex;
//  align-self: flex-start;
// margin-left: 5px
// `

// export const TitleContent = styled.div`
// display: flex;
// flex-direction: column;
// margin-left: 10px;

// `

// export const ViewsYear = styled.div`
// display: flex;
// align-items: center

// `

// export const Title = styled.p`
//   font-size: 17px;
//   color: ${({theme}) => (theme === 'dark' ? '#f9f9f9' : '#1e293b')};
//   margin-bottom: 0px;
// `

// export const Name = styled.p`
//   font-size: 15px;
//   color: ${({theme}) => (theme === 'dark' ? '#ebebeb' : '#181818')};
//   line-height: 0;
// `

// export const ViewCount = styled.p`
//   line-height: 1;
//   font-size: 13px;
//   color: ${({theme}) => (theme === 'dark' ? '#909090' : '#181818')};
//   margin-top: 3px;
// `

// export const PublishedAt = styled.p`
//   line-height: 1;
//   font-size: 13px;
//   color: ${({theme}) => (theme === 'dark' ? '#ebebeb' : '#181818')};
//   margin-left: 10px;
// `

// export const LoaderView = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 100%;
// min-height: 100vh;
// `
// export const FailureView = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 100%;
// min-height: 100vh;
// `
// export const Para = styled.p``

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
  color: ${({theme}) => (theme === 'dark' ? '#ffffff' : '')};
  margin-left: 10px;
`

export const VideosContainer = styled.div`
  margin-bottom: 30px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const Li = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const Img = styled.img`
  width: 240px;
  height: 300px;
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
  margin-bottom: 0px;
`

export const Name = styled.p`
  font-size: 15px;
  color: ${({theme}) => (theme === 'dark' ? '#ebebeb' : '#181818')};
  line-height: 0;
`

export const ViewCount = styled.p`
  line-height: 1;
  font-size: 13px;
  color: ${({theme}) => (theme === 'dark' ? '#909090' : '#181818')};
  margin-top: 3px;
`

export const PublishedAt = styled.p`
  line-height: 1;
  font-size: 13px;
  color: ${({theme}) => (theme === 'dark' ? '#ebebeb' : '#181818')};
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
