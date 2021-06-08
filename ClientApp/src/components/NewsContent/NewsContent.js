  
import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import * as _ from 'lodash';
import "./NewsContent.css";
import axios from "axios";
import {useState, useEffect} from "react";


const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  console.log("NEWSSS", newsArray)

  const [NewsList, setNewsList] = useState([])
  const [recordForEdit, setRecordForEdit] = useState(null)

  useEffect(() => {
      refreshNewsList();
  }, [])

  const NewsAPI = (url = 'http://localhost:5000/api/News/') => {
    return {
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Are you sure to delete this record?'))
        NewsAPI().delete(id)
            .then(res => refreshNewsList())
            .catch(err => console.log(err))
}


function refreshNewsList() {
  NewsAPI().fetchAll()
      
}



  return (
    <Container maxWidth="md">
      <div className="content">
        {/* <div className="downloadMessage">
        </div> */}

        {/* {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))} */}

        {_.map(newsArray, (newsItem) => {
          return(
            <>
            <NewsCard newsItem={newsItem} key={newsItem.title} />
            
            <button className="butn btun-light delete-button" onClick={e => onDelete(e, parseInt(newsItem.id))}>
                    <i className="far fa-trash-alt"></i>
                </button>
                </>
          )
        })}

        
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
            
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;