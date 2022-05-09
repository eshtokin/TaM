import { all } from 'redux-saga/effects'
import { groupSaga } from 'src/feature/groups'

export default function* saga() {
  yield all([groupSaga()])
}
