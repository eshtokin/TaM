import { Group } from 'src/feature/groups/types'
import { Button, ButtonGroup, Paper } from '@mui/material'

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
        justifyContent: 'space-evenly',
        padding: '10px',
        margin: '10px 0',
      }}
      onClick={() => setActiveGroup(group.title)}>
      <span
        style={{
          fontSize: '20px',
          padding: '5px 0 0 0 ',
          margin: '0 10px 0 0',
          fontWeight: '600',
        }}>
        {group.title}
      </span>
      <ButtonGroup>
        <Button onClick={() => openGroup(group.title)}>open</Button>
        <Button onClick={() => deleteGroup(group.title)}>delete</Button>
      </ButtonGroup>
    </Paper>
  )
}
