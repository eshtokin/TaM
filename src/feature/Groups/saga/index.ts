import {
  addCurrentTabsToGroupAction,
  deleteTabAction,
  moveTabToAnotherGroupAction,
  openGroupAction,
  openTabAction,
} from './../actions/index'
import { createGroupAction, deleteGroupAction } from '../actions'
import { takeLatest } from 'redux-saga/effects'
import { createGroupSaga } from './createGrouSaga'
import deleteGroupSaga from './deleteGroupSaga'
import addCurrentTabsToGroupSaga from './addCurrentTabsToGroupSaga'
import openTabSaga from './openTabSaga'
import deleteTabSaga from './deletetabSaga'
import openGroupSaga from './openGroupSaga'
import moveTabToAnotherGroupSaga from './moveTabToAnotherGroupSaga'

function* groupSaga(): Generator {
  yield takeLatest(createGroupAction, createGroupSaga)
  yield takeLatest(deleteGroupAction, deleteGroupSaga)
  yield takeLatest(addCurrentTabsToGroupAction, addCurrentTabsToGroupSaga)
  yield takeLatest(openTabAction, openTabSaga)
  yield takeLatest(deleteTabAction, deleteTabSaga)
  yield takeLatest(openGroupAction, openGroupSaga)
  yield takeLatest(moveTabToAnotherGroupAction, moveTabToAnotherGroupSaga)
}

export default groupSaga
