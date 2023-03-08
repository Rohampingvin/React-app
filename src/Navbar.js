import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
       <nav className="navbar">
        <h1>weblap</h1>
        <div className="divlinks">
            <Link to="/">home</Link>
            <Link to="/create">New page</Link>
        </div>
       </nav> 
     );
}
 
export default Navbar;