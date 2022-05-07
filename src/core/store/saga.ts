import { PayloadAction } from '@reduxjs/toolkit'
import { addGroupAction, createGroupAction } from './actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { Group } from '../types'

function* createGroupSaga(action: PayloadAction<{ name: string }>): Generator {
  yield call(console.log, action.payload)

  const newGroup: Group = {
    title: action.payload.name,
    active: false,
  }

  yield put(addGroupAction(newGroup))
}

function* sagas(): Generator {
  yield takeEvery(createGroupAction, createGroupSaga)
}

export default sagas
