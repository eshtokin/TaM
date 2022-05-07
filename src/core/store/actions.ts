import {
  Group,
  CreateGroupPayload,
  DeleteGroupPayload,
  RemoveGroupPayload,
} from './../types'
import { createAction } from '@reduxjs/toolkit'

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