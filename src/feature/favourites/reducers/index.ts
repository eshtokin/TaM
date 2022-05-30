import {
  addTabToFavouritesAction,
  deleteTabFromFavouritesAction,
} from './../actions/index'
import { createReducer } from '@reduxjs/toolkit'
import { FavouritesInitialState } from '../types'

const favouritesInitialState: FavouritesInitialState = {
  tabs: [],
  addDialogOpen: false,
}

const favouritesReducer = createReducer(favouritesInitialState, (builder) => {
  builder.addCase(addTabToFavouritesAction, (state, action) => ({
    ...state,
    tabs: state.tabs.concat([action.payload]),
  }))

  builder.addCase(deleteTabFromFavouritesAction, (state, action) => ({
    ...state,
    tabs: state.tabs.filter((t) => t.url !== action.payload.url),
  }))
})

export default favouritesReducer
