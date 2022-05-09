import {
  Group,
  CreateGroupPayload,
  DeleteGroupPayload,
  RemoveGroupPayload,
  SetActiveGroupPayload,
} from '../types'
import { createAction } from '@reduxjs/toolkit'
import { Tab } from 'src/core/types'

export const createGroupAction = createAction<CreateGroupPayload>(
  'CREATE_GROUP',
)

export const addGroupAction = createAction<Group>('ADD_GROUP')

export const deleteGroupAction = createAction<DeleteGroupPayload>(
  'DELETE_GROUP',
)

export const removeGroupAction = createAction<RemoveGroupPayload>(
  'REMOVE_GROUP',
)

export const setActiveGroupAction = createAction<SetActiveGroupPayload>('SET_ACTIVE_PAYLOAD')

export const loadCurrentTabsAction = createAction('LOAD_CURRENT_TABS')

export const setCurrentTabsAction = createAction<Tab[]>('SET_CURRENT_TABS')