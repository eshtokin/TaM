import { AddBox } from '@mui/icons-material'
import { Tab } from 'src/core/types'
import FavouriteListItem from './FavouriteListItem'

type Props = {
  tabs: Tab[]
  addNewFavouritesTab: () => void
  deleteFavouriteTab: () => void
}

const FavouriteList: React.FC<Props> = ({
  tabs,
  addNewFavouritesTab,
  deleteFavouriteTab,
}) => {
  return (
    <>
      {tabs.map((t) => (
        <FavouriteListItem tab={t} key={`favouriteTab-${t.id}`} />
      ))}
      {tabs.length < 12 && (
        <AddBox
          sx={{ width: '140px', height: '100px', margin: '0 20px 25px' }}
        />
      )}
    </>
  )
}

export default FavouriteList
