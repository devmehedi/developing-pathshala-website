import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/header'
import Navbar from './components/Header/Navbar/navbar';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/notFound">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
