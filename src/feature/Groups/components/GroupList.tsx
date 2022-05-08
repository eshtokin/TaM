import { FC, useState } from 'react'
import styled from 'styled-components'
import GroupListItem from './GroupListItem'
import { colors } from 'src/core/constants'
import { Button, Input, Text } from 'src/core/components'
import { Group } from 'src/feature/groups/types'

type Props = {
  groups: Group[]
  editingMode: boolean
  deleteMode: boolean
  setActiveGroup: (title: string) => void
  deleteGroup: (title: string) => void
  addNewGroup: (title: string) => void
  toggleDeleteMode: () => void
  toggleEditingMode: () => void
}
const GroupList: FC<Props> = ({
  groups,
  editingMode,
  deleteMode,
  setActiveGroup,
  deleteGroup,
  addNewGroup,
  toggleDeleteMode,
  toggleEditingMode,
}) => {
  const [newGroupName, setNewGroupName] = useState('')
  const _renderGroups = () => {
    return (
      <>
        {groups.map((group, index) => (
          <GroupListItem
            key={`group-${index}`}
            {...{ group, deleteMode, setActiveGroup, deleteGroup }}
          />
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
        <Button
          onClick={() => {
            if (!newGroupName.trim().length) return
            addNewGroup(newGroupName)
            setNewGroupName('')
          }}
        >
          <Text cantSelect={false}>+</Text>
        </Button>
      </>
    )
  }

  return (
    <GroupListContainer>
      <SideContainer>
        {groups.length > 0 && (
          <Button onClick={toggleDeleteMode}>
            <Text cantSelect={true}>{deleteMode ? 'x' : '-'}</Text>
          </Button>
        )}
      </SideContainer>
      <CenterContainer>
        {_renderGroups()}
        {editingMode && _renderAddRow()}
      </CenterContainer>
      <SideContainer>
        <Button onClick={toggleEditingMode}>
          <Text cantSelect={true}>{editingMode ? 'x' : '+'}</Text>
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

export default GroupList
