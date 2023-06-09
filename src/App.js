import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Components/Header/Header';
import Menu from './Components/Sticky-Menu/Menu';
import Footer from './Components/Footer/Footer';
import Priv from './Page/Policy/Priv';
import Gallery from './Page/Gallery/Gallery';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy-policy" component={Priv} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
