import { all } from 'redux-saga/effects'
import { saga as groupSaga } from 'src/feature/groups'

export default function* appSaga() {
  yield all([groupSaga()])
}
