import { useAppSelector } from 'src/store/hooks'
import FavouriteList from '../components/FavouriteList'

const FavouritesContainer: React.FC = () => {
  const favouriteTabs = useAppSelector((state) => state.favourites.tabs)

  const addNewFavouritesTab = () => {}

  const deleteFavouriteTab = () => {}

  return (
    <FavouriteList
      {...{ tabs: favouriteTabs, addNewFavouritesTab, deleteFavouriteTab }}
    />
  )
}

export default FavouritesContainer
