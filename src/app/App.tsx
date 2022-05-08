import React from 'react'
import { colors } from 'src/core/constants'
import styles from 'styled-components'
import store, { persistor } from 'src/core/store'
import { Provider } from 'react-redux'
import GroupList from 'src/feature/Groups/components/GroupList'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer>
          <GroupList />
        </MainContainer>
      </PersistGate>
    </Provider>
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
