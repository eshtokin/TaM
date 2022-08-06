import { updateGroupAction } from './../actions/index'
import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { Group } from '../types'
import { Tab } from 'src/core/types'

export default function* deleteTabSaga(action: PayloadAction<Tab>): Generator {
  const stateGroups = yield select((state) => (state as RootState).group.groups)
  const groups = [...(stateGroups as Group[])]
  if (!groups) return

  const currentGroup = groups.filter((g) => g.active)[0]
  const updatedGroup = {
    ...currentGroup,
    tabs: currentGroup.tabs.filter((t) => t.id !== action.payload.id),
  }
  yield put(updateGroupAction(updatedGroup))
}
