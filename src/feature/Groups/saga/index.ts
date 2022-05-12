import {
  addCurrentTabsToGroupAction,
  openTabAction,
  updateGroupsAction,
} from './../actions/index'
import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  addGroupAction,
  createGroupAction,
  deleteGroupAction,
  removeGroupAction,
} from '../actions'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { CreateGroupPayload, DeleteGroupPayload, Group } from '../types'
import { Tab } from 'src/core/types'
import { getTabsFromCurrentWindow, openTab } from 'src/chrome/tabs'

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
  yield put(addCurrentTabsToGroupAction(newGroup.title))
}

function* deleteGroupSaga(
  action: PayloadAction<DeleteGroupPayload>,
): Generator {
  // TODO: add confirmation modal or restore btn
  yield put(removeGroupAction({ title: action.payload.title }))
}

function* addCurrentTabsToGroupSaga(action: PayloadAction<string>): Generator {
  const groupTitle = action.payload
  const group = yield select((state) =>
    (state as RootState).group.groups.find((g) => g.title === groupTitle),
  )

  if (!group) return

  const currentTabs = yield call(getTabsFromCurrentWindow)

  const duplicatedGroup = { ...(group as Group) }
  duplicatedGroup.tabs = [...(currentTabs as Tab[])]

  yield put(updateGroupsAction(duplicatedGroup))
}

function* openTabSaga(action: PayloadAction<Tab>): Generator {
  yield openTab(action.payload, true)
}

function* groupSaga(): Generator {
  yield takeLatest(createGroupAction, createGroupSaga)
  yield takeLatest(deleteGroupAction, deleteGroupSaga)
  yield takeLatest(addCurrentTabsToGroupAction, addCurrentTabsToGroupSaga)
  yield takeLatest(openTabAction, openTabSaga)
}

export default groupSaga
