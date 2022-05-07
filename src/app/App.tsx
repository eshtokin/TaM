import React from 'react'
import { colors } from 'src/core/constants'
import styles from 'styled-components'
// import CurrentTabList from 'src/feature/currentTabs/components/CurrentTabList'
import NavigationBar from 'src/feature/navigation/components/NavigationBar'

function App() {
  return (
    <MainContainer>
      <NavigationBar/>
      {/* <CurrentTabList /> */}
    </MainContainer>
  )
}

const MainContainer = styles.div`
  height: 100vh;
  width: 100vw;
  min-height: 400px;
  min-width: 400px;
  background: ${colors.veryDarkBlue};
`
export default App
