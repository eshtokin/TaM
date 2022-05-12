import { FC } from 'react'
import { colors } from 'src/core/constants'
import { Tab } from 'src/core/types'
import styled from 'styled-components'
import { MOCK_TABS } from '../constants/mock'

type Props = {
  tabs: Tab[]
  openTab: (tab: Tab) => void
}
const TabList: FC<Props> = ({ tabs, openTab }) => {
  return (
    <Container>
      {MOCK_TABS.map((tab, index) => (
        <TabWrapper>
          {tab.title}
          <BtnWrapper>
            <Button>Delete</Button>
            <Button onClick={() => openTab(tab)}>Open</Button>
          </BtnWrapper>
        </TabWrapper>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: auto;
  height: 95vh;
  margin: 10px 10px 10px 5px;
  padding: 0 0 0 0;
  border-radius: 10px;
  background-color: ${colors.verySoftBlue};
  overflow: scroll;
`

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vh;
  min-height: 5vh;
  overflow: scroll;
  margin: 10px;
  padding: 5px 10px;
  background-color: ${colors.verySoftBlue};
  border: 2px solid ${colors.veryDarkBlue};
  border-radius: 5px;
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button``

export default TabList
