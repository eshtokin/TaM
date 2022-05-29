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
  moveTabToAnotherGroupAction,
} from 'src/feature/groups/actions'
import GroupList from '../components/GroupList'
import TabList from '../components/TabList'
import { Tab } from 'src/core/types'
import { Group } from '../types'

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

  const moveTab = (tab: Tab, chosenGroup: Group) => {
    dispatch(moveTabToAnotherGroupAction({ tab, chosenGroup }))
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
      <TabList
        {...{ tabs: currentTabs, openTab, deleteTab, moveTab, groups }}
      />
    </>
  )
}

export default GroupListContainer
