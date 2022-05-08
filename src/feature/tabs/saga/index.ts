import { MOCK_TABS } from './../constants/mock'
import { loadCurrentTabsAction, setCurrentTabsAction } from './../actions/index'
import { put, select, takeLatest } from 'redux-saga/effects'
import { RootState } from 'src/store/store'
import { Tab } from 'src/core/types'

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

export default function* tabsSaga() {
  yield takeLatest(loadCurrentTabsAction, loadCurrentTabsSaga)
}
