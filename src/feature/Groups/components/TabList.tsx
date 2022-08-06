import { Tab } from 'src/core/types'
import TabListItem from './TabListItem'
import { Paper } from '@mui/material'
import { Group } from '../types'

type Props = {
  tabs: Tab[]
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
  moveTab: (tab: Tab, chosenGroup: Group) => void
  groups: Group[]
}
const TabList: React.FC<Props> = ({
  tabs,
  openTab,
  deleteTab,
  moveTab,
  groups,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        alignSelf: 'center',
        height: '96vh',
        overflow: 'auto',
      }}>
      {tabs.map((tab) => {
        return (
          <TabListItem
            key={`tabListItme-${tab.id}`}
            {...{ tab, openTab, deleteTab, moveTab, groups }}
          />
        )
      })}
    </Paper>
  )
}

export default TabList
