import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/store/hooks'
import {
  setActiveGroupAction,
  deleteGroupAction,
  createGroupAction,
  loadCurrentTabsAction,
  openTabAction,
  deleteTabAction,
  openGroupAction,
} from 'src/feature/groups/actions'
import GroupList from '../components/GroupList'
import TabList from '../components/TabList'
import { Tab } from 'src/core/types'

const GroupListContainer = () => {
  const dispatch = useDispatch()
  const groups = useAppSelector((state) => state.group.groups)
  const currentTabs = groups.find((g) => g.active)?.tabs || []

  const setActiveGroup = (title: string) =>
    dispatch(setActiveGroupAction({ title }))

  const deleteGroup = (title: string) => dispatch(deleteGroupAction({ title }))

  const addNewGroup = (title: string) => {
    dispatch(createGroupAction({ title }))
  }

  useEffect(() => {
    dispatch(loadCurrentTabsAction())
  }, [dispatch])

  const openTab = (tab: Tab) => {
    dispatch(openTabAction(tab))
  }

  const deleteTab = (tab: Tab) => {
    dispatch(deleteTabAction(tab))
  }

  const openGroup = (title: string) => {
    dispatch(openGroupAction(title))
  }

  return (
    <>
      <GroupList
        {...{
          groups,
          setActiveGroup,
          openGroup,
          deleteGroup,
          addNewGroup,
        }}
      />
      <TabList {...{ tabs: currentTabs, openTab, deleteTab }} />
    </>
  )
}

export default GroupListContainer
