import { Group } from 'src/feature/groups/types'
import { Button, ButtonGroup, Paper, colors } from '@mui/material'
import { OpenInBrowser, Delete } from '@mui/icons-material'

type Props = {
  group: Group
  setActiveGroup: (groupTitle: string) => void
  openGroup: (groupTitle: string) => void
  deleteGroup: (groupTitle: string) => void
}

export default function GroupListItem({
  group,
  setActiveGroup,
  openGroup,
  deleteGroup,
}: Props) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        margin: '10px 0',
        ...(group.active && { backgroundColor: colors.blue[50] }),
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: colors.blue[50],
        },
      }}
      onClick={() => setActiveGroup(group.title)}>
      <span
        style={{
          display: 'flex',
          flex: 1,
          fontSize: '20px',
          padding: '5px 0 0 0 ',
          margin: '0 10px 0 0',
          fontWeight: '600',
        }}>
        {group.title}
      </span>
      <ButtonGroup>
        <Button
          onClick={() => openGroup(group.title)}
          sx={{ '&:hover': { backgroundColor: colors.green[300] } }}>
          <OpenInBrowser />
        </Button>
        <Button
          onClick={() => deleteGroup(group.title)}
          sx={{ '&:hover': { backgroundColor: colors.amber[400] } }}>
          <Delete />
        </Button>
      </ButtonGroup>
    </Paper>
  )
}
