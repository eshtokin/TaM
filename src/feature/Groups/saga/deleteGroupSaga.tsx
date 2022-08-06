import { PayloadAction } from '@reduxjs/toolkit'
import { removeGroupAction } from '../actions'
import { put } from 'redux-saga/effects'
import { DeleteGroupPayload } from '../types'

export default function* deleteGroupSaga(
  action: PayloadAction<DeleteGroupPayload>,
): Generator {
  // TODO: add confirmation modal or restore btn
  yield put(removeGroupAction({ title: action.payload.title }))
}
