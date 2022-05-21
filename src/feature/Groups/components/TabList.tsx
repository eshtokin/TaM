import { Tab } from 'src/core/types'
import TabListItem from './TabListItem'
import { Paper } from '@mui/material'

type Props = {
  tabs: Tab[]
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
}
const TabList: React.FC<Props> = ({ tabs, openTab, deleteTab }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        alignSelf: 'center',
        height: '96vh',
        overflow: 'scroll',
      }}>
      {tabs.map((tab) => (
        <TabListItem {...{ tab, openTab, deleteTab }} />
      ))}
    </Paper>
  )
}

export default TabList
