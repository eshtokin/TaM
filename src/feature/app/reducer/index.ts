import { setMockedStateAction } from './../actions/index'
import { createReducer } from '@reduxjs/toolkit'
import { AppStore } from '../types'

const initialAppState: AppStore = {
  isMockedState: false,
}

const appReducer = createReducer(initialAppState, (builder) => {
  builder.addCase(setMockedStateAction, (state, action) => ({
    ...state,
    isMockedState: action.payload,
  }))
})

export default appReducer
