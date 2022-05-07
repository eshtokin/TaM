import { createReducer } from '@reduxjs/toolkit'
import { GroupStore } from '../types';
import { addGroupAction } from './actions';

const initialGroupStore: GroupStore = {
  groups: [],
}

const groupReducer = createReducer(initialGroupStore, (build) => {
  build.addCase( addGroupAction, (state, action) => ({...state, groups: state.groups.concat(action.payload)}))
})

export default groupReducer
