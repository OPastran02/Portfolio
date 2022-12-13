import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/about" component={About} exact />
      <Route path="/resume" component={Resume} exact />
      <Route path="/contact" component={Contact} exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
