import styled from 'styled-components'
import { Text } from 'src/core/components'
import { colors } from 'src/core/constants'
import { Group } from 'src/core/types'

type Props = {
  group: Group
  deleteMode: boolean
  setActive: (groupTitle: string) => void
  deleteGroup: (groupTitle: string) => void
}

export default function GroupListItem({ group, deleteMode, setActive, deleteGroup }: Props) {
  return (
    <Wrapper active={group.active} onClick={() => setActive(group.title)}>
      {deleteMode && <DeleteLabel onClick={() => deleteGroup(group.title)}><Text cantSelect={true}>x</Text></DeleteLabel>}
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
  margin: 0 10px;
  height: 100%;
  border-radius: 10px;
  background-color: ${colors.pureOrange};
  box-sizing: border-box;

  ${({ active }) =>
    active
      ? `
          border-top: 5px solid ${colors.pureOrange};
          border-bottom: 5px solid ${colors.white};
        `
      : null}

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