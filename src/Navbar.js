import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav"> 
        <ul>
            {/* <img src={LogoImg} width={130} height={50} alt="passedImg"/>
                <CustomLink to= "/game"> Game </CustomLink>*/}
                <CustomLink to= "/"> Home </CustomLink>
                <CustomLink to= "/about"> About </CustomLink> 
                <CustomLink to= "/work"> Work </CustomLink>
        </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath =useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className ={isActive? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    );
}

