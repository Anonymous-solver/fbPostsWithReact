import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home.component";
import Login from "./components/Login/login.component";
import PrivateRoute from "./components/PrivateRoute/privateRoute.component";

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {/* <h1>email: {loggedInUser.email}</h1> */}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                    <PrivateRoute path="/home">
                        <Home loggedInUser={loggedInUser} ></Home>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/logout">
                        <Login></Login>
                    </Route>
                    {/* <Route path="/home">
                        <Home></Home>
                    </Route> */}
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
