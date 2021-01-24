import React from "react";
import Footer from "../footer/Footer";
import { LanguageProvider } from "../language/Language";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Contact from "../contact/Contact";
import ProductPage from "../productsPage/ProductPage";
import AboutUs from "../aboutUs/AboutUs";
import Navi from "../navi/Navi";
import SignComplete from "../signFolders/SignComplete";
import Signin from "../signFolders/signin/Signin";
import AddProduct from "../addProduct/AddProduct";
import AuthProvider from "../../services/AuthContext";
const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
       
        <Navi></Navi>
        
      
        <div style={{ height: "4rem" }}></div>

        <AuthProvider>
          <Route path="/admin" exact component={Signin}></Route>
          <Route path="/add_product" exact component={AddProduct}></Route>
          <Route path="/products" exact component={ProductPage}></Route>
          </AuthProvider>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route
            path="/authentication/activate/:activationCode"
            exact
            component={SignComplete}
          ></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/about" exact component={AboutUs}></Route>
        </Switch>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
