import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Public_Profix, Public_Mint } from "../../config";
import Home from "./home";
import Mint from "./mint";

const PublicPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={Public_Profix} />
        </Route>
        <Route exact path={Public_Mint} component={Mint} />
        <Route exact path={Public_Profix} component={Home} />
      </Switch>
    </Router>
  );
};
export default PublicPage;
