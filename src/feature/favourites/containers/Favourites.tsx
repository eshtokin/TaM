import { Box } from '@mui/material'
import { useAppSelector } from 'src/store/hooks'
import FavouriteList from '../components/FavouriteList'

const FavouritesContainer: React.FC = () => {
  const favouriteTabs = useAppSelector((state) => state.favourites.tabs)

  const addNewFavouritesTab = () => {}

  const deleteFavouriteTab = () => {}

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        width: '42vw',
        maxWidth: '42vw',
        margin: '1vh 20px',
      }}
    >
      <FavouriteList
        {...{ tabs: favouriteTabs, addNewFavouritesTab, deleteFavouriteTab }}
      />
    </Box>
  )
}

export default FavouritesContainer
