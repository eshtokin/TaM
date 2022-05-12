import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/store/hooks'
import {
  setActiveGroupAction,
  deleteGroupAction,
  createGroupAction,
  loadCurrentTabsAction,
  openTabAction,
} from 'src/feature/groups/actions'
import GroupList from '../components/GroupList'
import TabList from '../components/TabList'
import { Tab } from 'src/core/types'
import { getBookmarksList } from 'src/chrome/bookmarks'

const GroupListContainer = () => {
  const dispatch = useDispatch()
  const groups = useAppSelector((state) => state.group.groups)
  const currentTabs = groups.find((g) => g.active)?.tabs || []

  const [deleteMode, setDeleteMode] = useState(false)

  const setActiveGroup = (title: string) =>
    dispatch(setActiveGroupAction({ title }))

  const deleteGroup = (title: string) => dispatch(deleteGroupAction({ title }))

  const addNewGroup = (title: string) => {
    dispatch(createGroupAction({ title }))
  }

  const toggleDeleteMode = () => setDeleteMode(!deleteMode)

  useEffect(() => {
    dispatch(loadCurrentTabsAction())
  }, [dispatch])

  useEffect(() => {
    getBookmarksList()
  }, [])
  const openTab = (tab: Tab) => {
    dispatch(openTabAction(tab))
  }

  return (
    <>
      <GroupList
        {...{
          groups,
          deleteMode,
          setActiveGroup,
          deleteGroup,
          addNewGroup,
          toggleDeleteMode,
        }}
      />
      <TabList {...{ tabs: currentTabs, openTab }} />
    </>
  )
}

export default GroupListContainer
