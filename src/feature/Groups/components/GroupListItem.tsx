import styled from 'styled-components'
import { Text } from 'src/core/components'
import { colors } from 'src/core/constants'
import { Group } from 'src/feature/groups/types'

type Props = {
  group: Group
  deleteMode: boolean
  setActiveGroup: (groupTitle: string) => void
  deleteGroup: (groupTitle: string) => void
}

export default function GroupListItem({
  group,
  deleteMode,
  setActiveGroup,
  deleteGroup,
}: Props) {
  return (
    <Wrapper active={group.active} onClick={() => setActiveGroup(group.title)}>
      {deleteMode && (
        <DeleteLabel onClick={() => deleteGroup(group.title)}>
          <Text cantSelect={true}>x</Text>
        </DeleteLabel>
      )}
      <Text cantSelect={true}>{group.title}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 5px 10px;
  height: 5vh;
  border-radius: 10px;
  box-sizing: border-box;

  ${({ active }) =>
    active
      ? `background-color: ${colors.pureOrange};`
      : `background-color: ${colors.strongCyan};`}

  :hover {
    cursor: pointer;
  }
`

const DeleteLabel = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  position: absolute;
  top: -6px;
  right: -6px;

  :hover {
    background-color: red;
  }
`
