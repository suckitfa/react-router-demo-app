import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Topics = () => <h2>Topics</h2>
function NestRoute() {
    return(
        <Router>
            <div>
                <h1>嵌套路由</h1>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/topics">
                            Topics
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" >
                        <Home />
                    </Route>
                    <Route path="/about" >
                        <About />
                    </Route>
                    <Route path="/topics" >
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}



export default NestRoute;