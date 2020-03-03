import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <div >
            <Router>
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
                   
                    
                </ul><br/>
                <p>Copyright @kingjamesegun</p>
                <p>2020</p>
                
            </nav>
            </Router>
            
        </div>
    )
}

export default Footer;