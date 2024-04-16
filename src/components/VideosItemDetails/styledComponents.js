import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
`

export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  color: #ffffff;
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
  height: 400px;
  width: 500px;
`

export const Heading = styled.h1``

export const Para = styled.p``

export const Button = styled.button`
  background-color: #4f46e5;
  color: #f1f1f1;
  outline: none;
  border-style: none;
  width: 15%;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
`
