import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  addGroupAction,
  createGroupAction,
  deleteGroupAction,
  loadCurrentTabsAction,
  removeGroupAction,
  setCurrentTabsAction,
} from '../actions'
import { put, select, takeLatest } from 'redux-saga/effects'
import { CreateGroupPayload, DeleteGroupPayload, Group } from '../types'
import { Tab } from 'src/core/types'
import { MOCK_TABS } from '../constants/mock'

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
    tabs: [],
  }

  yield put(addGroupAction(newGroup))
}

function* deleteGroupSaga(
  action: PayloadAction<DeleteGroupPayload>,
): Generator {
  // TODO: add confirmation modal or restore btn
  yield put(removeGroupAction({title: action.payload.title}))
}

function* loadCurrentTabsSaga(): Generator {
  const isMockedState = yield select(
    (state) => (state as RootState).app.isMockedState,
  )

  if (isMockedState) {
    yield put(setCurrentTabsAction(MOCK_TABS))
    return
  }

  const tabs = yield chrome.tabs.query({ currentWindow: true })

  yield put(setCurrentTabsAction(tabs as Tab[]))
}

function* groupSaga(): Generator {
  yield takeLatest(createGroupAction, createGroupSaga)
  yield takeLatest(deleteGroupAction, deleteGroupSaga)
}

export default groupSaga
