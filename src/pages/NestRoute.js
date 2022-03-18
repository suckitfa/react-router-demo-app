import {
        Link,
        BrowserRouter as Router,
        Route,
        Switch,
        useRouteMatch
} from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
function NestRoute() {
    return(
        <Router>
            <div>
            <h1>嵌套路由</h1>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}


function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h3>About</h3>
}

function User() {
    return <h2>User</h2>
}

function Topics() {
    const match = useRouteMatch()
    console.log(match)
    return(
        <div>
            <h1>话题</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>选择一个话题吧！</h3>
                </Route>
            </Switch>
        </div>
    )
}
function Topic() {
    const match = useRouteMatch()
    console.log(match)
    const params = useParams()
    const {topicId} = params;
    return(
        <h4>你选择的话题Id是: {topicId}</h4>
    )
}
export default NestRoute;