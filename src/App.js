import "./App.css";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import HomePage from "./Pages/Home/HomePage";
import {AnimatePresence} from 'framer-motion'
import { Switch, Route,useLocation } from 'react-router-dom';
import Esports from "./Pages/Esports/Esports";
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
          <Esports/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
