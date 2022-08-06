import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from 'src/store/store'
import { Groups } from '../groups'
import { Paper } from '@mui/material'
import { Favourites } from '../favourites'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Paper
          sx={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
          }}>
          <Groups />
          <Favourites />
        </Paper>
      </PersistGate>
    </Provider>
  )
}

export default App
