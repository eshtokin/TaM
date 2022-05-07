import { useState } from 'react'
import styled from 'styled-components'
import GroupListItem from './GroupListItem'
import { colors } from 'src/core/constants'
import { createGroupAction } from 'src/core/store/actions'
import { useAppSelector, useDispatch } from 'src/core/hooks'
import { Text } from 'src/core/components'

export default function GroupList() {
  const groups = useAppSelector((state) => state.group.groups)
  const [newGroupName, setNewGroupName] = useState('')

  const dispatch = useDispatch()

  const onClick = (title: string) => {}

  const addNewGroup = () => {
    dispatch(createGroupAction({ name: newGroupName }))
    setNewGroupName('')
  }

  return (
    <GroupListContainer>
      {groups.map((group, index) => (
        <GroupListItem key={`group-${index}`} {...{ group, onClick }} />
      ))}
      <Input
        type={'text'}
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
      />
      <Button onClick={addNewGroup}>
        <Text cantSelect={false}>+</Text>
      </Button>
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
  height: 5vh;
  padding: 5px 0;
`
const Input = styled.input`
  height: 5vh;
  width: 150px;
  padding: 0 10px;
  margin: 0 10px;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 700;
  background-color: ${colors.verySoftBlue};
  border: 2px solid ${colors.veryDarkBlue};
  border-radius: 10px;
  outline: none;
`

const Button = styled.button`
  height: 5vh;
  padding: 0 10px;
  font-size: 20px;
  background-color: ${colors.verySoftBlue};
  border: 2px solid ${colors.veryDarkBlue};
  border-radius: 10px;
`
