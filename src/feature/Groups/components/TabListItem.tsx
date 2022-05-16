import { Button, Container, Paper } from '@mui/material'
import { Tab } from 'src/core/types'

type Props = {
  tab: Tab
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
}
const TabListItem: React.FC<Props> = ({ tab, openTab, deleteTab }) => {
  return (
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
  )
}

export default TabListItem
