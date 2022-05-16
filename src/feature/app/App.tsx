import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import styles, { ThemeProvider } from 'styled-components'
import store, { persistor } from 'src/store/store'
import { colors, theme } from 'src/core/constants'
import { Groups } from '../groups'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainContainer>
            <Groups />
          </MainContainer>
        </ThemeProvider>
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
