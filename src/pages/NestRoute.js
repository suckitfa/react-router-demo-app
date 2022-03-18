import {Link} from 'react-router-dom'
function NestRoute() {

}



function Home() {
    return(
        <h1>Home</h1>
    )
}

function About() {
    return(
        <h1>About</h1>
    )
}

function Topics() {
    <div>
        <h2>Topics</h2>
        <ul>
            <li><Link to={`${match.url}/components`}>Components</Link></li>
        </ul>
    </div>
}
export default NestRoute;