import {
  addCurrentTabsToGroupAction,
  deleteTabAction,
  moveTabToAnotherGroupAction,
  openGroupAction,
  openTabAction,
  updateGroupAction,
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
import {
  CreateGroupPayload,
  DeleteGroupPayload,
  Group,
  MoveTabToAnotherGroupPayload,
} from '../types'
import { Tab } from 'src/core/types'
import {
  closeTab,
  getCurrentTab,
  getTabsFromCurrentWindow,
  openTab,
} from 'src/chrome/tabs'

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
  const currentTabs = yield call(getTabsFromCurrentWindow)
  ;(currentTabs as Tab[]).forEach((t) => {
    !t.active && closeTab(t.id)
  })
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
  const currentTab = yield call(getCurrentTab)

  const duplicatedGroup = { ...(group as Group) }
  duplicatedGroup.tabs = (currentTabs as Tab[]).filter(
    (t) => t.id !== (currentTab as Tab).id,
  )

  yield put(updateGroupAction(duplicatedGroup))
}

function* openTabSaga(action: PayloadAction<Tab>): Generator {
  yield openTab(action.payload, true)
}

function* deleteTabSaga(action: PayloadAction<Tab>): Generator {
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

function* openGroupSagas(action: PayloadAction<string>): Generator {
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

function* moveTabToAnotherGroupSaga(
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

function* groupSaga(): Generator {
  yield takeLatest(createGroupAction, createGroupSaga)
  yield takeLatest(deleteGroupAction, deleteGroupSaga)
  yield takeLatest(addCurrentTabsToGroupAction, addCurrentTabsToGroupSaga)
  yield takeLatest(openTabAction, openTabSaga)
  yield takeLatest(deleteTabAction, deleteTabSaga)
  yield takeLatest(openGroupAction, openGroupSagas)
  yield takeLatest(moveTabToAnotherGroupAction, moveTabToAnotherGroupSaga)
}

export default groupSaga
