import { useEffect } from 'react'
import { useAppSelector, useDispatch } from 'src/store/hooks'
import { loadCurrentTabsAction } from '../actions'
import TabList from '../components/TabList'

const Tabs = () => {
  const dispatch = useDispatch()
  const currentTabs = useAppSelector(state => state.tabs.currentTabs)

  useEffect(() => {
    dispatch(loadCurrentTabsAction())   
  })


  return <TabList {...{tabs: currentTabs}}/>
}

export default Tabs