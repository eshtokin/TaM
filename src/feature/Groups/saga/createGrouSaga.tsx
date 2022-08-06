import { addCurrentTabsToGroupAction } from './../actions/index'
import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import { addGroupAction } from '../actions'
import { call, put, select } from 'redux-saga/effects'
import { CreateGroupPayload, Group } from '../types'
import { Tab } from 'src/core/types'
import { closeTab, getTabsFromCurrentWindow } from 'src/chrome/tabs'

export function* createGroupSaga(
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
  const currentTabs = yield call(getTabsFromCurrentWindow)
  ;(currentTabs as Tab[]).forEach((t) => {
    !t.active && closeTab(t.id)
  })
}

