import { FC } from 'react'
import { colors } from 'src/core/constants'
import { Tab } from 'src/core/types'
import styled from 'styled-components'

type Props = {
  tabs: Tab[]
}
const TabList: FC<Props> = ({ tabs }) => {
  return (
    <Container>
      {tabs?.map((tab, index) => (
        <P>
          {index} - {tab.title}
        </P>
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
  border-radius: 10px;
  background-color: ${colors.verySoftBlue};
`
const P = styled.p`
  width: 100%;
  margin: 10px 10px;
  word-wrap: break-word;
`

export default TabList
