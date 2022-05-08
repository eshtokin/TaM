import { setCurrentTabsAction } from './../actions/index'
import { createReducer } from '@reduxjs/toolkit'
import { Tab } from 'src/core/types'

type TabsState = {
  currentTabs: Tab[]
}
const initialTabsState: TabsState = {
  currentTabs: [],
}

const tabReducer = createReducer(initialTabsState, (builder) => {
  builder.addCase(setCurrentTabsAction, (state, action) => ({
    ...state,
    currentTabs: action.payload,
  }))
})

export default tabReducer
