import React from "react";
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
const Home = () => <h1>Home Page</h1>
const User = () => <h1>User Page</h1>
const About = () => <h1>About Page</h1>
const Users = () =>  <h1>Users Page</h1>

function BasicRoute() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
            <Route path="/users" component={Users} />
        </Switch>
        </Router>
    );
}

export default BasicRoute;