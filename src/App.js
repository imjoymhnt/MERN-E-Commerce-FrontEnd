import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />

        <Route path="/:id" exact={true} component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// 024172
// 49C5DD
// E3E3E3
// F24C62
