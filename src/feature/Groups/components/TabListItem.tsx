import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  colors,
  Container,
  Paper,
  TextField,
} from '@mui/material'
import { Tab } from 'src/core/types'
import {
  Delete,
  OpenInBrowser,
  MoveUp,
} from '@mui/icons-material'
import { useState } from 'react'
import { Group } from '../types'

type Props = {
  tab: Tab
  openTab: (tab: Tab) => void
  deleteTab: (tab: Tab) => void
  moveTab: (tab: Tab, chosenGroup: Group) => void
  groups: Group[]
}
const TabListItem: React.FC<Props> = ({
  tab,
  openTab,
  deleteTab,
  moveTab,
  groups,
}) => {
  const [groupListVisible, setGroupListVisible] = useState(false)
  const toggleGroupList = () => setGroupListVisible(!groupListVisible)

  const [autocompleteValue, setAutocompleteValue] = useState<string | null>('')
  const [inputAutocompleteValue, setInputAutocompleteValue] = useState('')

  const options = groups.map((g) => g.title)

  const onSelectGroup = (newValue: string | null) => {
    setAutocompleteValue(newValue)
    if (!newValue) return
    setGroupListVisible(false)
    const chosenGroup = groups.find((g) => g.title === newValue)
    if (!chosenGroup) return
    moveTab(tab, chosenGroup)
  }

  return (
    <Container
      key={`tab-${tab.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ButtonGroup sx={{ margin: '0 5px 0 0', padding: '5px 0' }}>
            <Button
              onClick={() => openTab(tab)}
              sx={{ '&:hover': { backgroundColor: colors.green[300] } }}>
              <OpenInBrowser />
            </Button>
            <Button
              sx={{ '&:hover': { backgroundColor: colors.amber[400] } }}
              onClick={() => deleteTab(tab)}>
              <Delete />
            </Button>
            <Button
              onClick={toggleGroupList}
              sx={{ '&:hover': { backgroundColor: colors.lime[200] } }}>
              <MoveUp />
            </Button>
          </ButtonGroup>

          {groupListVisible && (
            <Autocomplete
              value={autocompleteValue}
              onChange={(event, newValue) => onSelectGroup(newValue)}
              inputValue={inputAutocompleteValue}
              onInputChange={(event, newInputValue) =>
                setInputAutocompleteValue(newInputValue)
              }
              renderInput={(params) => (
                <TextField {...params} label={'Controlable'} size={'small'} />
              )}
              options={options}
              sx={{
                display: 'flex',
                flex: 1,
              }}
            />
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default TabListItem
