import styled from 'styled-components'
import { Text } from 'src/core/components'
import { colors } from 'src/core/constants'
import { Group } from 'src/core/types'

type Props = {
  group: Group
  onClick: (groupTitle: string) => void
}

export default function GroupListItem({ group, onClick }: Props) {
  return (
    <Wrapper active={group.active} onClick={() => onClick(group.title)}>
      <Text cantSelect={true}>{group.title}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 0 10px;
  height: 100%;
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
