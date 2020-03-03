import React from 'react';
import {Link} from 'react-router-dom';


const Nav=()=>{
    return(
        <div>
            <nav>
                <h3>Outlook</h3>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                        <a href="#services"><li>Services</li></a>
                    <Link to="/jornal" active>
                        <li>Journal</li>
                    </Link>
                    
                        <a href="#contact"><li>Contact</li></a>
                   
                    
                </ul>
                
            </nav>
        </div>
    )
}

export default Nav;