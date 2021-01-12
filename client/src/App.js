import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import PrivateRoute from "./hocs/PrivateRoute";
import PublicRoute from "./hocs/PublicRoute";
import "./pages/style.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/user" component={Detail}/>
        <PublicRoute exact path="/login" component={Login}/>
        <PublicRoute exact path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
