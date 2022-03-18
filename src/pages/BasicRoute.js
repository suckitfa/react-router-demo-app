import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


function BasicRoute() {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">User</Link>
                        </li>
                    </ul>
                </nav>
                {/* 
                Switch looks through its children Route
                and renders the first that match the url
                 */}
                 <Switch>
                     <Route path="/">
                         <Home />
                     </Route>
                     <Route path="/about">
                         <About />
                     </Route>
                     <Route path="/users">
                        <Users />
                     </Route>
                 </Switch>
            </div>
        </Router>
    )
}

function About() {
    return(
        <h2>About</h2>
    )
}

function Users() {
    return(
        <h2>Users</h2>
    )
}

function Home() {
    return(
        <h2>Home</h2>
    )
}
export default BasicRoute;