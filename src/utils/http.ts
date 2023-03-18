import axios from 'axios'
class AxiosInstance {
    client;
    constructor(){
        this.client = axios.create({
            baseURL: 'https://hn.algolia.com/api/v1/'
        })
    }
    getInstance(){
        return this.client
    }
}
const instance = new AxiosInstance()
export default instance;