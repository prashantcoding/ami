import "./App.css";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import HomePage from "./Pages/Home/HomePage";
import {AnimatePresence} from 'framer-motion'
import { Switch, Route,useLocation } from 'react-router-dom';
import EventPage from './Pages/Events/EventPage' ;
import KnowMore from './Pages/Know_More Page/KnowMore';
import AboutUs from './Pages/AboutUs/AboutUs'
const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/events">
          <CategoryPage />
        </Route>
        <Route path="/esport">
          <EventPage/>
        </Route>
        <Route path="/know_more">
          <KnowMore/>
        </Route>
        <Route path="/AboutUs">
          <AboutUs/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
