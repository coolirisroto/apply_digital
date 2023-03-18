import http from '../utils/http'

export type Item = {
    created_at_i: string;
    author: string;
    story_title: string;
    story_url: string;
    created_at: string;
}
type GetItemsResponse = {
    hitsPerPage: number;
    page: number;
    nbPages: number;
    hits: Array<Item>
}

async function fetchItems (params = {}): Promise<GetItemsResponse> {
    const response =  await http.getInstance().get('search_by_date',{
        params
    })
    const data = response.data as GetItemsResponse;
    return data;
}

export {
    fetchItems,
}