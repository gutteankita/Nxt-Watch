import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Img = styled.img`
  height: 30px;
  width: 140px;
  margin-bottom: 58px;
  align-self: center; /* Vertically center the image */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 430px;
  width: 400px;
`

export const UsernameField = styled.div`
  display: flex;
  flex-direction: column;
`

export const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 26px; /* Fixed the typo here */
  color: #7e858e;
  font-weight: 600;
`

export const Input = styled.input`
  outline: none;
  border: 2px solid #d7dfe9;
  border-radius: 5px;
  font-size: 22px;
  color: #7e858e;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const ShowPasswordField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const CheckBoxInput = styled.input`
  border: 2px solid #1e293b;
  height: 20px;
  width: 20px;
`

export const ShowPasswordLabel = styled.label`
  color: #181818;
  font-size: 18px;
`

export const Button = styled.button`
  background: #3b82f6;
  color: #ffffff;
  outline: none;
  border-style: none;
  border-radius: 5px;
  height: 38px;
  font-weight: 600;
  flex-shrink: 0;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 16px;
  margin-bottom: 40px;
`
