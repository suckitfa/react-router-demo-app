import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom'

function BasicRoute() {
    return(
        <Router>
            <div>
                <h1>基本路由</h1>
                <nav>
                    <ul>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

function Home() {
    return(
        <h2>Home</h2>
    )
}

function About() {
    return (
        <h2>About</h2>
    )
}

function User() {
    return(
        <h2>User</h2>
    )
}


export default BasicRoute;