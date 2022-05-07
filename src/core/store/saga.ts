import { PayloadAction } from '@reduxjs/toolkit'
import { addGroupAction, createGroupAction } from './actions'
import { put, takeEvery } from 'redux-saga/effects'
import { CreateGroupPayload, Group } from '../types'

function* createGroupSaga(
  action: PayloadAction<CreateGroupPayload>,
): Generator {
  const newGroup: Group = {
    title: action.payload.title,
    active: false,
  }

  yield put(addGroupAction(newGroup))
}

function* sagas(): Generator {
  yield takeEvery(createGroupAction, createGroupSaga)
}

export default sagas
