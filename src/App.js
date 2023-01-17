import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouter>

      {/* <h1 style={{ textAlign: "center" }}>
        Onubikkhon.Com first authorized distrbutor in Bangladesh..
      </h1> */}
    </div>
  );
}

export default App;
