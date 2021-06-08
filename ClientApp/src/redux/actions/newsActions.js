import { CREATE_NEWS, FETCH_NEWS } from './types'
import axios from "axios";

const NewsAPI = (url = 'http://localhost:5000/api/News/') => {
    return {
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}

export const createNews = (data) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_NEWS,
            payload: {
                data
            }
        })
    };
};

export const fetchNews = () => {
    return async (dispatch) => {
        try {
            NewsAPI().fetchAll()
                .then(res => {
                    console.log("+++++++++++", res.data)
                    let fetchedNews = res.data
                    dispatch({
                        type: FETCH_NEWS,
                        payload: {
                            fetchedNews
                        }
                    })
                })
                .catch(err => console.log(err))

        } catch (err) {
            console.err(err)
        }
    }
}