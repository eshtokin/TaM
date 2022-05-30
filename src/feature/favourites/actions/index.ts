import { createAction } from '@reduxjs/toolkit'
import { Tab } from 'src/core/types'

export const addTabToFavouritesAction = createAction<Tab>(
  'ADD_TAB_TO_FAVOURITES',
)

export const deleteTabFromFavouritesAction = createAction<Tab>(
  'DELETE_TAB_FROM_FAVOURITES',
)
