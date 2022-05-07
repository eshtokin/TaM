import NavigationTabItem from './NavigationTabItem'
import styled from 'styled-components'
import { colors } from 'src/core/constants'
import { Text } from 'src/core/components'
import { useState } from 'react'

const MOCK_TABS = [
  { id: 1, title: 'Bookmarks', active: true },
  { id: 2, title: 'Tabs', active: false },
]

export default function NavigationBar() {
  const [tabs, setTabs] = useState(MOCK_TABS)

  const onClick = (id: number) => {
    setTabs(
      tabs.map((tab) =>
        tab.id === id ? { ...tab, active: true } : { ...tab, active: false },
      ),
    )
  }

  return (
    <NavBar>
      {tabs.map((tab) => (
        <NavigationTabItem tab={tab} onClick={onClick} />
      ))}
    </NavBar>
  )
}

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.verySoftBlue};
  width: 50wh;
  height: 5vh;
  padding: 5px 0;
`
