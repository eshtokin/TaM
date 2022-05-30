import { Box } from '@mui/material'
import { Tab } from 'src/core/types'

type Props = {
  tab: Tab
}

const FavouriteListItem: React.FC<Props> = ({ tab }) => {
  return (
    <Box
      sx={{
        width: '180px',
        height: '100px',
        margin: '20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <img
        style={{ width: '70px', height: '70px', margin: '10px 0' }}
        src={tab.favIconUrl}
        alt={tab.title}
      />
      <p>{tab.title?.slice(0, 20)}</p>
    </Box>
  )
}

export default FavouriteListItem
