import { FC, useState } from 'react'
import GroupListItem from './GroupListItem'
import { Group } from 'src/feature/groups/types'
import { Paper, Input, Button } from '@mui/material'

type Props = {
  groups: Group[]
  setActiveGroup: (title: string) => void
  openGroup: (title: string) => void
  deleteGroup: (title: string) => void
  addNewGroup: (title: string) => void
}

const GroupList: FC<Props> = ({
  groups,
  setActiveGroup,
  openGroup,
  deleteGroup,
  addNewGroup,
}) => {
  const [newGroupName, setNewGroupName] = useState('')

  const _renderGroups = () => {
    return (
      <>
        {groups.map((group, index) => (
          <GroupListItem
            key={`group-${index}`}
            {...{ group, openGroup, setActiveGroup, deleteGroup }}
          />
        ))}
      </>
    )
  }

  const _renderAddRow = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Input
          type={'text'}
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          style={{ flex: 1 }}
        />
        <div style={{ width: '20px' }} />
        <Button
          variant={'contained'}
          disabled={0 === newGroupName.length}
          onClick={() => {
            if (!newGroupName.trim().length) return
            addNewGroup(newGroupName)
            setNewGroupName('')
          }}>
          Add
        </Button>
      </div>
    )
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        margin: '20px',
        width: '20vw',
      }}>
      {_renderAddRow()}
      {_renderGroups()}
    </Paper>
  )
}

export default GroupList
