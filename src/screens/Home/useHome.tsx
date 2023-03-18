import { useState, useEffect } from 'react'
import { fetchItems } from '../../clients/algolia'
import { isEmpty } from 'lodash';
import { getStorageValue, setStorageValue } from '../../utils/storage'
import { DropdownItemType, INewsItem } from '../../types';

export const HITS_PER_PAGE = 50;

export const filterTypes = {
    ALL: 'all',
    FAVS: 'favs',
}

const useHome = () => {
    const [newsList, setNewsList] = useState<Array<INewsItem>>([])
    const [filterSelected, setFilterSelected] = useState<string>(filterTypes.ALL) // all y favs
    const [dropdownValue, setDropdownValue] = useState<any>(getStorageValue("dropdownFilter")) // dropdown
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [numberOfPages, setnumberOfPages] = useState<number>(0)
    const [page, setPage] = useState(1)

    const getParams = () => {
        const query = dropdownValue?.label?.toLowerCase()
        const params = {
            query,
            page,
            hitsPerPage: HITS_PER_PAGE
        }
        return params;
    }

    useEffect(() => {
        if(filterSelected === filterTypes.FAVS){
            const favs = getFavorites();
            setnumberOfPages(Math.ceil(favs.length /HITS_PER_PAGE ))
            setNewsList(favs)
        }
        else {
            getNewsList(getParams());
        }
      }, [filterSelected, dropdownValue, page])



    const getFavorites = () => getStorageValue("favorites") || [];

    const matchFavorites = (items: INewsItem[]) => {
        const favoritesList = getFavorites();
        items.forEach((item, index) => {
            items[index] = {
                ...item,
                isFavorite: !!(favoritesList && favoritesList.find((favorite: { created_at_i: string; }) => favorite.created_at_i === item.created_at_i))
            }
        })
        return items
    }

    const getNewsList = (params: any = {}) => {
        setIsLoading(true)
        fetchItems(params).then(data => {
            const result = data.hits.filter(item => !isEmpty(item.author) && !isEmpty(item.story_title) && !isEmpty(item.story_url) && !isEmpty(item.created_at))
            setNewsList(matchFavorites(result))
            setnumberOfPages(data.nbPages)
        }).finally(() => setIsLoading(false))
    }


    const addOrRemoveFavorite = (item: INewsItem) => {
        const currentList = newsList;
        const index = currentList.findIndex(el => el.created_at_i === item.created_at_i)
        const isFavorite = currentList[index].isFavorite;
        currentList[index] = { ...item, isFavorite: !isFavorite }
        let favoritesList: INewsItem[] = getStorageValue("favorites") || [];
        if(isFavorite){
            favoritesList = favoritesList.filter(el => el.created_at_i !== currentList[index].created_at_i)
        }else {
            favoritesList.push(currentList[index]);
        }
        setNewsList([...currentList])
        setStorageValue("favorites", favoritesList)
    }

    const hanleDropdown = (item: DropdownItemType) => {
        setDropdownValue(item)
        setStorageValue("dropdownFilter", item)
    }

    const onchangeFilter = (filter: string) => {
        setFilterSelected(filter)
        setPage(1)
    }

    return {
        newsList,
        isLoading,
        getNewsList,
        addOrRemoveFavorite,
        hanleDropdown,
        numberOfPages,
        onchangeFilter,
        filterSelected,
        page,
        setPage,
        dropdownValue
    }
}

export default useHome