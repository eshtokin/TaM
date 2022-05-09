import { colors } from 'src/core/constants'
import styles from 'styled-components'
import store, { persistor } from 'src/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Groups } from 'src/feature/groups'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer>
          <Groups />
        </MainContainer>
      </PersistGate>
    </Provider>
  )
}

const MainContainer = styles.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  min-height: 400px;
  min-width: 400px;
  background: ${colors.veryDarkBlue};

`
export default App
