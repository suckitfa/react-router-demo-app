import React from 'react'
import { useParams } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
function NestRoute() {
    return(
        <Router>
            <div>
            <h1>嵌套路由</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/topics">
                    <Topics />    
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
function Home() {
    return(
        <h2>Home</h2>
    )
}

function About() {
    return(
        <h2>About</h2>
    )
}
function User() {
    return(
        <h2>User</h2>
    )
}
function Topics() {
    const match = useRouteMatch()
    return(
        <div>
            <h2>话题</h2>
            <ul>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please Select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

function Topic(){
    const {topicId} = useParams()
    return <h3>Requested topic Id: {topicId}</h3>
}
export default NestRoute;