import React, { useState } from "react";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Single } from "./pages/Single/Single";
import { SingleInfo } from "./pages/SingleInfo/SingleInfo";
import { SingleVideo } from "./pages/SingleVideo/SingleVideo";
// PROVIDERS
import { HomeProvider } from "./context/HomeContext/HomeContext";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  // JUST FOR TEST NOw
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Router>
        <HomeProvider>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch>
              {/* HOME ROUTES  */}
              <Route exact path="/">
                <Home type="" />
              </Route>
              <Route exact path="/movies">
                <Home type="movies" />
              </Route>
              <Route exact path="/series">
                <Home type="series" />
              </Route>
              <Route path="/result/:genr">
                <Home type="" />
              </Route>
              <Route exact path="/single/:title">
                <Single />
              </Route>
              <Route exact path="/single/:title/info">
                <SingleInfo />
              </Route>
              <Route exact path="/single/:title/video">
                <SingleVideo />
              </Route>

              {/* REGISTER ROUTE  */}
              <Route exact path="/register">
                <Register />
              </Route>
              {/* LOGIN ROUTE  */}
              <Route exact path="/login">
                <Login />
              </Route>
              {/* NOT FOUND ROUTE  */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </AnimatePresence>
        </HomeProvider>
      </Router>
    </>
  );
}

export default App;
