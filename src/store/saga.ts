import { all } from 'redux-saga/effects'
import { groupSaga } from 'src/feature/groups'
import { tabsSaga } from 'src/feature/tabs'

export default function* saga() {
  yield all([groupSaga(), tabsSaga()])
}
