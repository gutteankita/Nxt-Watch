import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const SearchContainer = styled.div``

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #909090;
  width: 40%;
  margin-top: 20px;
  margin-left: 40px;

  @media (max-width: 576px) {
    width: 350px;
  }
`

export const Input = styled.input`
  outline: none;
  border-style: none;
  background: transparent;
  font-size: 24px;
  color: #909090;
  padding: 5px;
  width: 80%;
`

export const Button = styled.button`
  background: #7e858e;
  outline: none;
  border-top: none;
  border-bottom: none;
  border-right: none;
  cursor: pointer;
  height: 40px;
  width: 15%;
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

export const Img = styled.img`
  height: 200px;
  width: 300px;
`

export const Heading = styled.h1``

export const Para = styled.p``

export const NoSearchVideos = styled.div`
  background-color: ${({theme}) => (theme === 'dark' ? '#0f0f0f' : '#f9f9f9')};
  color: ${({theme}) => (theme === 'dark' ? '#ffffff' : '#000000')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const NoSearchVideosImg = styled.img`
  height: 200px;
  width: 300px;
`
