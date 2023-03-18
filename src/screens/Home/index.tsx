
import Dropdown from '../../components/Dropdown';
import NewsItem from '../../components/NewsItem'
import Pagination from '../../components/Pagination'
import useHome, { HITS_PER_PAGE, filterTypes } from './useHome'
import Button from '../../components/Button';
import angular from '../../assets/icons/angular.png'
import react from '../../assets/icons/react.png'
import vue from '../../assets/icons/vue.png'
import { DropdownItemType } from '../../types';

const dropdownItems: DropdownItemType[] = [
  {
    id: 1,
    label: 'Angular',
    icon: angular
  },
  {
    id: 2,
    label: 'ReactJs',
    icon: react
  },
  {
    id: 3,
    label: 'VueJs',
    icon: vue
  },
]

const HomeScreen = () => {
  const {
    dropdownValue,
    newsList,
    addOrRemoveFavorite,
    hanleDropdown,
    numberOfPages,
    onchangeFilter,
    filterSelected,
    page,
    setPage
  } = useHome();
  return (
    <main className='container main'>
      <div className='buttons'>
        <Button text="All" onClick={() => onchangeFilter(filterTypes.ALL)} isActive={filterSelected === filterTypes.ALL} />
        <Button text="My faves" onClick={() => onchangeFilter(filterTypes.FAVS)} isActive={filterSelected === filterTypes.FAVS} />
      </div>
      {filterSelected === filterTypes.ALL && page === 1 && (
        <div className='column dropdown'>
          <Dropdown
            items={dropdownItems}
            defaultValue={dropdownValue}
            onClick={(item: DropdownItemType) => hanleDropdown(item)} />
        </div>)}
      <section className="row">
        {newsList.map((item, index) => (
          <article className='column' key={`story_${index}`}>
            <NewsItem item={item} onPress={addOrRemoveFavorite} isFavorite={item.isFavorite} />
          </article>
        ))}
      </section>
      <div className='pagination'>
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={(page) => {
            setPage(page);
          }}
          pageSize={HITS_PER_PAGE} />
      </div>
    </main>
  )
}

export default HomeScreen