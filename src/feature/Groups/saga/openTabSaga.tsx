import { PayloadAction } from '@reduxjs/toolkit'
import { Tab } from 'src/core/types'
import {
  openTab,
} from 'src/chrome/tabs'

export default function* openTabSaga(action: PayloadAction<Tab>): Generator {
  yield openTab(action.payload, true)
}

