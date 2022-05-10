import { updateGroupsAction } from './../actions/index'
import { createReducer } from '@reduxjs/toolkit'
import { GroupStore } from '../types'
import {
  addGroupAction,
  removeGroupAction,
  setActiveGroupAction,
} from '../actions'

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

  build.addCase(setActiveGroupAction, (state, action) => ({
    ...state,
    groups: state.groups.map((group) => ({
      ...group,
      active: action.payload.title === group.title,
    })),
  }))

  build.addCase(updateGroupsAction, (state, action) => ({
    ...state,
    groups: state.groups.map((group) => {
      return group.title === action.payload.title ? action.payload : group
    }),
  }))
})

export default groupReducer
