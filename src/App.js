import "./App.css";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import HomePage from "./Pages/Home/HomePage";
import {AnimatePresence} from 'framer-motion'
import { Switch, Route,useLocation } from 'react-router-dom';
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
      </Switch>
    </AnimatePresence>
  );
};

export default App;
