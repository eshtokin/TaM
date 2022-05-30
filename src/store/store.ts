import createSagaMiddleware from 'redux-saga'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import groupReducer from '../feature/groups/reducers'
import { appReducer } from 'src/feature/app'
import { favouritesReducer } from 'src/feature/favourites'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  app: appReducer,
  group: groupReducer,
  favourites: favouritesReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
})
export const persistor = persistStore(store)

sagaMiddleware.run(saga)

export type RootState = ReturnType<typeof rootReducer>

export default store
