import { updateGroupAction } from './../actions/index'
import { RootState } from '../../../store/store'
import { PayloadAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { Group, MoveTabToAnotherGroupPayload } from '../types'

export default function* moveTabToAnotherGroupSaga(
  action: PayloadAction<MoveTabToAnotherGroupPayload>,
): Generator {
  //TODO: add loader
  const { tab, chosenGroup } = action.payload

  const groups = yield select((state) => (state as RootState).group.groups)
  const groupState = [...(groups as Group[])]

  // update current tab
  const currentGroup = groupState.find((g) => g.active)
  if (!currentGroup) return
  const updatedCurrentGroup: Group = {
    ...currentGroup,
    tabs: currentGroup.tabs.filter((t) => t.url !== tab.url),
  }
  yield put(updateGroupAction(updatedCurrentGroup))

  // update chosen tab
  const updateChosenGroup = {
    ...chosenGroup,
    tabs: chosenGroup.tabs.concat([tab]),
  }
  yield put(updateGroupAction(updateChosenGroup))
}
