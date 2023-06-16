import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Components/Header/Header';
import Menu from './Components/Sticky-Menu/Menu';
import Footer from './Components/Footer/Footer';
import Priv from './Page/Policy/Priv';
import Gallery from './Page/Gallery/Gallery';
import Vns from './Page/About/Vns';
import Hotel from './Page/About/Hotel';
import Rooms from './Page/Accomodation/Rooms';
import BookingPage from './Page/Booking/Booking';
import Login from './Page/Login/Login';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/privacy-policy" component={Priv} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about-vns" component={Vns} />
          <Route exact path="/about" component={Hotel} />
          <Route exact path="/accomodation" component={Rooms} />
          <Route exact path="/booking" component={BookingPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
