import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Login from './components/Login';
import Services from './components/pages/Services';
import BNews from './components/pages/BNews';
import BNews2 from './components/pages/BNews2';
import './components/NewsCard/NewsCard.css';
import Create from './components/pages/Create';
import Conpage from './components/pages/Conpage';
import Stock from './components/pages/Stock';
import Logoutview from './components/pages/Logoutview';

function App() {
  return (
    <div>

      <Router>
        {/* <Navbar /> */}
        <Switch> 

          <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/sign-up' component={Login} />
          <Route path='/BNews' component={BNews} />
          <Route path='/BNews2' component={BNews2} />
          <Route path='/Create' component={Create} />
          <Route path='/Conpage' component={Conpage} />
          <Route path='/StockM' component={Stock} />
          <Route path='/Logoutview' component={Logoutview} />
          
          </Switch>

        
      </Router>
    </div>
  );
}

export default App;



