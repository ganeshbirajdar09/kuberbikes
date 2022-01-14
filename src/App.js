import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import PagenotFound from "./pages/PagenotFound";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/customers" component={Clients} />
        <Route exact path="/projects" component={Projects} />
        <Route path="*" component={PagenotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
