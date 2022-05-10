import { FC, useState } from 'react'
import styled from 'styled-components'
import GroupListItem from './GroupListItem'
import { colors } from 'src/core/constants'
import { Button, Input, Text } from 'src/core/components'
import { Group } from 'src/feature/groups/types'

type Props = {
  groups: Group[]
  deleteMode: boolean
  setActiveGroup: (title: string) => void
  deleteGroup: (title: string) => void
  addNewGroup: (title: string) => void
  toggleDeleteMode: () => void
}

const GroupList: FC<Props> = ({
  groups,
  deleteMode,
  setActiveGroup,
  deleteGroup,
  addNewGroup,
  toggleDeleteMode,
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
      <ButtonRow>
        <SideContainer>
          {groups.length > 0 && (
            <Button onClick={toggleDeleteMode}>
              <Text cantSelect={true}>{deleteMode ? 'x' : '-'}</Text>
            </Button>
          )}
        </SideContainer>
         {_renderAddRow()}
      </ButtonRow>
      <CenterContainer>{_renderGroups()}</CenterContainer>
    </GroupListContainer>
  )
}

const GroupListContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: auto;
  width: 20vw;
  height: 95vh;
  margin: 10px 5px 10px 10px;
  border-radius: 10px;
  background-color: ${colors.verySoftBlue};
`

const SideContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonRow = styled.div`
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: space-around;
`

export default GroupList
