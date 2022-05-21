import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import store, { persistor } from 'src/store/store'
import { theme } from 'src/core/constants'
import { Groups } from '../groups'
import { Paper } from '@mui/material'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Paper
            sx={{
              display: 'flex',
              height: '100vh',
              width: '100vw',
              overflow: 'scroll',
            }}>
            <Groups />
          </Paper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
