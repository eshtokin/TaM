import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, select } from 'redux-saga/effects'
import { Group } from '../types'
import { Tab } from 'src/core/types'
import { closeTab, openTab } from 'src/chrome/tabs'

export default function* openGroupSaga(
  action: PayloadAction<string>,
): Generator {
  const groupTitle = action.payload
  const groups = yield select((state) => (state as RootState).group.groups)
  const currentGroup = (groups as Group[]).filter(
    (g) => g.title === groupTitle,
  )[0]

  if (currentGroup) {
    currentGroup.tabs.forEach((t) => {
      openTab(t)
    })

    const currentTab = yield chrome.tabs.getCurrent()

    yield call(closeTab, (currentTab as Tab).id)
  }
}
