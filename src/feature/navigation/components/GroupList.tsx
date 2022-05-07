import { useState } from 'react'
import styled from 'styled-components'
import GroupListItem from './GroupListItem'
import { colors } from 'src/core/constants'
import { createGroupAction } from 'src/core/store/actions'
import { useAppSelector, useDispatch } from 'src/core/hooks'
import { Button, Input, Text } from 'src/core/components'

export default function GroupList() {
  const dispatch = useDispatch()
  const groups = useAppSelector((state) => state.group.groups)

  const [editingMode, setEditingMode] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')

  const onClick = (title: string) => {}

  const addNewGroup = () => {
  if (!newGroupName.trim().length) return
    dispatch(createGroupAction({ title: newGroupName }))
    toggleEditingMode()
    setNewGroupName('')
  }

  const toggleEditingMode = () => {
    setEditingMode(!editingMode)
  }

  const _renderGroups = () => {
    return (
      <>
        {groups.map((group, index) => (
          <GroupListItem key={`group-${index}`} {...{ group, onClick }} />
        ))}
      </>
    )
  }

  const _renderAddRow = () => {
    return (
      <>
        <Input
          type={'text'}
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
        />
        <Button onClick={addNewGroup}>
          <Text cantSelect={false}>+</Text>
        </Button>
      </>
    )
  }

  return (
    <GroupListContainer>
      <SideContainer />
      <CenterContainer>
        {_renderGroups()}
        {editingMode && _renderAddRow()}
      </CenterContainer>
      <SideContainer>
        <Button onClick={toggleEditingMode}>
          <Text cantSelect={false}>{editingMode ? 'x' : '+'}</Text>
        </Button>
      </SideContainer>
    </GroupListContainer>
  )
}

const GroupListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.verySoftBlue};
  width: 50wh;
  padding: 5px 0;
`

const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 10;
  height: 5vh;
`
