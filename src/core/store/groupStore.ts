import { createReducer } from '@reduxjs/toolkit'
import { GroupStore } from '../types'
import { addGroupAction, removeGroupAction } from './actions'

const initialGroupStore: GroupStore = {
  groups: [],
}

const groupReducer = createReducer(initialGroupStore, (build) => {
  build.addCase(addGroupAction, (state, action) => ({
    ...state,
    groups: state.groups.concat(action.payload),
  }))

  build.addCase(removeGroupAction, (state, action) => ({
    ...state,
    groups: state.groups.filter((g) => g.title !== action.payload.title),
  }))
})

export default groupReducer
