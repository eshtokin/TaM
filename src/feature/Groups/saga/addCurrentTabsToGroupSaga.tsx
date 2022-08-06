import { updateGroupAction } from './../actions/index'
import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, select } from 'redux-saga/effects'
import { Group } from '../types'
import { Tab } from 'src/core/types'
import { getCurrentTab, getTabsFromCurrentWindow } from 'src/chrome/tabs'

export default function* addCurrentTabsToGroupSaga(action: PayloadAction<string>): Generator {
  const groupTitle = action.payload
  const group = yield select((state) =>
    (state as RootState).group.groups.find((g) => g.title === groupTitle),
  )

  if (!group) return

  const currentTabs = yield call(getTabsFromCurrentWindow)
  const currentTab = yield call(getCurrentTab)

  const duplicatedGroup = { ...(group as Group) }
  duplicatedGroup.tabs = (currentTabs as Tab[]).filter(
    (t) => t.id !== (currentTab as Tab).id,
  )

  yield put(updateGroupAction(duplicatedGroup))
}
