import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/aboutme" exact component={Aboutme}></Route>
          <Route path="/leaderboard" component={LeaderBoard}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
