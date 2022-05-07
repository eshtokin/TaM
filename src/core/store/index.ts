import createSagaMiddleware from 'redux-saga'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import groupReducer from './groupStore'
import sagas from './saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({group: groupReducer})
const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] })

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof rootReducer>

export default store
