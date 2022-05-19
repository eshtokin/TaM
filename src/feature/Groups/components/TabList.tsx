import { Box } from '@mui/material'
import { colors } from 'src/core/constants'
import { Tab } from 'src/core/types'
import TabListItem from './TabListItem'

type Props = {
  tabs: Tab[]
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
}
const TabList: React.FC<Props> = ({ tabs, openTab, deleteTab }) => {
  return (
    <Box
      sx={{
        height: '95vh',
        margin: '10px',
        overflow: 'scroll',
        alignSelf: 'center',
        background: colors.verySoftBlue,
        borderRadius: '10px',
      }}>
      {tabs.map((tab) => (
        <TabListItem {...{ tab, openTab, deleteTab }} />
      ))}
    </Box>
  )
}

export default TabList
