import { Item } from '../clients/algolia'

export type DropdownItemType = {
    id?: number,
    icon?: string,
    label?: string
}

export interface INewsItem extends Item {
    isFavorite?: boolean
    query?: string
}