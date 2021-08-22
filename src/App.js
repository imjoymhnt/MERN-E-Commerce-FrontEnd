import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/ProductDetails/ProductDetails";
import HomePage from "./Pages/HomePage";
import "antd/dist/antd.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" exact component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
