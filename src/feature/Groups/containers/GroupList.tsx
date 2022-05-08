import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/core/hooks'
import {
  setActiveGroupAction,
  deleteGroupAction,
  createGroupAction,
} from 'src/core/store/actions'
import GroupList from '../components/GroupList'

const GroupListContainer = () => {
  const dispatch = useDispatch()
  const groups = useAppSelector((state) => state.group.groups)

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

  return (
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
  )
}

export default GroupListContainer
