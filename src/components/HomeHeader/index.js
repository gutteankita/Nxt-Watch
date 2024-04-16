import {Component} from 'react'
import {MdClear} from 'react-icons/md'

import {
  HomeHeaderContainer,
  Img,
  CloseButton,
  Para,
  Button,
  ContentContainer,
} from './styledComponents'

class HomeHeader extends Component {
  state = {
    show: true,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    const {show} = this.state

    return (
      <>
        {show && (
          <HomeHeaderContainer data-testid="banner">
            <ContentContainer>
              <>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <CloseButton data-testid="close">
                  <MdClear
                    onClick={this.handleToggle}
                    size={23}
                    color="#000000"
                  />
                </CloseButton>
              </>
            </ContentContainer>
            <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
            <Button>GET IT NOW</Button>
          </HomeHeaderContainer>
        )}
      </>
    )
  }
}

export default HomeHeader
