import { RootState } from './index'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  addGroupAction,
  createGroupAction,
  deleteGroupAction,
  removeGroupAction,
} from './actions'
import { put, select, takeLatest } from 'redux-saga/effects'
import { CreateGroupPayload, DeleteGroupPayload, Group } from '../types'

function* createGroupSaga(
  action: PayloadAction<CreateGroupPayload>,
): Generator {
  const groups = yield select<(state: RootState) => Group[]>(
    (state) => state.group.groups,
  )

  const isGroupExist = (groups as Group[]).find(
    (group) => group.title === action.payload.title,
  )

  if (isGroupExist) return

  const newGroup: Group = {
    title: action.payload.title,
    active: false,
  }

  yield put(addGroupAction(newGroup))
}

function* deleteGroupSaga(
  action: PayloadAction<DeleteGroupPayload>,
): Generator {
  // TODO: add confirmation modal or restore btn
  yield put(removeGroupAction({title: action.payload.title}))
}

function* sagas(): Generator {
  yield takeLatest(createGroupAction, createGroupSaga)
  yield takeLatest(deleteGroupAction, deleteGroupSaga)
}

export default sagas
