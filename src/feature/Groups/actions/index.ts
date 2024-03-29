import {
  Group,
  CreateGroupPayload,
  DeleteGroupPayload,
  RemoveGroupPayload,
  SetActiveGroupPayload,
  MoveTabToAnotherGroupPayload,
} from '../types'
import { createAction } from '@reduxjs/toolkit'
import { Tab } from 'src/core/types'

export const createGroupAction =
  createAction<CreateGroupPayload>('CREATE_GROUP')

export const addGroupAction = createAction<Group>('ADD_GROUP')

export const openGroupAction = createAction<string>('OPEN_GROUP')

export const deleteGroupAction =
  createAction<DeleteGroupPayload>('DELETE_GROUP')

export const removeGroupAction =
  createAction<RemoveGroupPayload>('REMOVE_GROUP')

export const updateGroupAction = createAction<Group>('UPDATE_GROUP_ACTION')

export const setActiveGroupAction =
  createAction<SetActiveGroupPayload>('SET_ACTIVE_PAYLOAD')

export const loadCurrentTabsAction = createAction('LOAD_CURRENT_TABS')

export const setCurrentTabsAction = createAction<Tab[]>('SET_CURRENT_TABS')

export const addCurrentTabsToGroupAction = createAction<string>(
  'ADD_CURRENT_TABS_TO_GROUP',
)

export const openTabAction = createAction<Tab>('OPEN_TAB')

export const deleteTabAction = createAction<Tab>('DELETE_TAB')

export const moveTabToAnotherGroupAction =
  createAction<MoveTabToAnotherGroupPayload>('MOVE_TAB_TO_ANOTHER_GROUP')
