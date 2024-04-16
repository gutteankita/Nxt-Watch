import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  videosList: [],
  saveVideosBtn: () => {},
})

export default ThemeContext

//  savedVideosList: [],
//   saveVideoButtonClicked: () => {},
