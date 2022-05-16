import { Box, Button, Container, Paper } from '@mui/material'
import { FC } from 'react'
import { colors } from 'src/core/constants'
import { Tab } from 'src/core/types'

type Props = {
  tabs: Tab[]
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
}
const TabList: FC<Props> = ({ tabs, openTab, deleteTab }) => {
  return (
    <Box
      sx={{
        height: '95vh',
        margin: '10px',
        overflow: 'scroll',
        alignSelf: 'center',
        background: colors.verySoftBlue,
        borderRadius: '10px',
      }}
    >
      {tabs.map((tab) => (
        <Container
          key={`tab-${tab.id}`}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <Paper
            sx={{
              margin: '10px',
              padding: '10px',
              width: '400px',
              overflow: 'hidden',
            }}
          >
            <h4 style={{ margin: '5px 0' }}>{tab.title?.slice(0, 50)}</h4>
            <h6 style={{ wordWrap: 'break-word' }}>{tab.url?.slice(0, 70)}</h6>
          </Paper>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ margin: '5px' }}
              onClick={() => openTab(tab)}
            >
              open
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: '5px' }}
              onClick={() => deleteTab(tab)}
            >
              delete
            </Button>
          </div>
        </Container>
      ))}
    </Box>
  )
}

export default TabList
