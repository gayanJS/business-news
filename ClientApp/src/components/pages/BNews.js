import axios from "axios";
import { useEffect, useState } from "react";
import '../NewsCard/NewsCard.css';       
import Footer from '../Footer';
import NavInshort from '../NavInshort';
import NewsContent from '../NewsContent/NewsContent';
import { connect } from "react-redux"
import { fetchNews } from '../../redux/actions/newsActions'
import Navbar from '../Navbar';
function App(props) {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

    const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=027578461b1a4738b05fc4f0da0ebba0`);
        
     
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
     
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    props.fetchNews()
   
  }, [newsResults, loadMore, category]);

  return (
    
    <div className="App" id="#home">
        <Navbar />
      <NavInshort setCategory={setCategory} />
      
      <NewsContent
        newsArray={props.news}
        />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    news : state.news.createdNews,
  }
}

export default connect(mapStateToProps, {fetchNews})(App);