import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/store/hooks'
import {
  setActiveGroupAction,
  deleteGroupAction,
  createGroupAction,
  loadCurrentTabsAction,
} from 'src/feature/groups/actions'
import GroupList from '../components/GroupList'
import TabList from '../components/TabList'

const GroupListContainer = () => {
  const dispatch = useDispatch()
  const groups = useAppSelector((state) => state.group.groups)
  const currentTabs = groups.find(g => g.active)?.tabs || []

  const [editingMode, setEditingMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)

  const setActiveGroup = (title: string) =>
    dispatch(setActiveGroupAction({ title }))

  const deleteGroup = (title: string) => dispatch(deleteGroupAction({ title }))

  const addNewGroup = (title: string) => {
    dispatch(createGroupAction({ title }))
    toggleEditingMode()
  }

  const toggleDeleteMode = () => setDeleteMode(!deleteMode)

  const toggleEditingMode = () => setEditingMode(!editingMode)

  useEffect(() => {
    dispatch(loadCurrentTabsAction())
  })

  return (
    <>
      <GroupList
        {...{
          groups,
          editingMode,
          deleteMode,
          setActiveGroup,
          deleteGroup,
          addNewGroup,
          toggleDeleteMode,
          toggleEditingMode,
        }}
      />
      <TabList {...{ tabs: currentTabs }} />
    </>
  )
}

export default GroupListContainer
