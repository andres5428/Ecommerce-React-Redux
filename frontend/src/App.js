/**
 * Imports
 */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

/**
 * Import components
 */
import NavBar from "./components/NavBar";
import RecommendedShoes from "./components/RecommendedShoes";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
        </Switch>
        <RecommendedShoes />
        <SocialMedia />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
