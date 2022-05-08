import {
  TypedUseSelectorHook,
  useSelector,
  createDispatchHook,
} from 'react-redux'
import { RootState } from './store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDispatch = createDispatchHook()