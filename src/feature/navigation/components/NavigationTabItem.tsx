import styled from 'styled-components'
import { Text } from 'src/core/components'
import { colors } from 'src/core/constants'

export default function NavigationTabItem({
  tab,
  onClick,
}: {
  tab: { id: number; title: string; active: boolean }
  onClick: (tabId: number) => void
}) {
  return (
    <Wrapper active={tab.active} onClick={() => onClick(tab.id)}>
      <Text cantSelect={true}>{tab.title}</Text>
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
