import { Route, route, Switch } from "react-router-dom";
import Home from "./containers/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
