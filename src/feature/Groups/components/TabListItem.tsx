import {
  Box,
  Button,
  ButtonGroup,
  colors,
  Container,
  Paper,
} from '@mui/material'
import { Tab } from 'src/core/types'
import { Delete, OpenInBrowser } from '@mui/icons-material'

type Props = {
  tab: Tab
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
}
const TabListItem: React.FC<Props> = ({ tab, openTab, deleteTab }) => {
  return (
    <Container
      key={`tab-${tab.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Box
        sx={{
          margin: '2px 0',
          padding: '10px',
          overflow: 'hidden',
        }}>
        <div style={{ margin: '5px 0' }}>
          <h4 style={{ margin: '5px 0' }}>{tab.title?.slice(0, 50)}</h4>
          <h6 style={{ wordWrap: 'break-word' }}>{tab.url?.slice(0, 70)}</h6>
        </div>
        <ButtonGroup sx={{ margin: '5px 0 0 0' }}>
          <Button
            onClick={() => openTab(tab)}
            sx={{
              backgroundColor: '#ffffff',
              '&:hover': { backgroundColor: colors.green[300] },
            }}>
            <OpenInBrowser />
          </Button>
          <Button
            sx={{
              backgroundColor: '#ffffff',
              '&:hover': { backgroundColor: colors.amber[400] },
            }}
            onClick={() => deleteTab(tab)}>
            <Delete />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  )
}

export default TabListItem
