import { useParams } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
}from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
function NestRouteTest() {
    return(
        // 最外层使用Browser包裹
        <Router>
            <div>
                <h1>使用router中的一些hooks</h1>
                <nav>
                <ul style={{display:'flex',justifyContent:"space-around",listStyle:'none'}}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Redirect to="/login">返回登入页</Redirect></li>
                </ul>
            </nav>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                {/* 越详细的放在前面 */}
                <Route path="/contact/:id">
                    <Contact />
                </Route>
                <Route path="/contact">
                    <AllContacts />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
function Login() {
    return(
        <h2>Login</h2>
    )
}
function About() {
    return <h2>页面About</h2>
}
function Home() {
    return <h2>Home页面</h2>
}
function Contact() {
    const params = useParams()
    const match = useRouteMatch()
    console.log('match in Child = ',match)
    const {id} = params;
    return (
        <h3>contactId : {id}</h3>
    )
}
function AllContacts() {
    const match = useRouteMatch()
    console.log(match)
    return(
        <div style={{border:'1px solid red'}}>
            <ol>
            <li><Link to={`${match.url}/bob-smith`}>bob smith</Link></li>
            <li>alice cooper</li>
            <li>john Cooper</li>
        </ol>
        </div>
    )
}
export default NestRouteTest;