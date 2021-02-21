import React, { Component }from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="principal">
               <Link to="/" className="livraria">
                  <div className="texto">
                    <h1>Filmaria</h1>
                  </div>
                </Link>
            </div>
        );
    }
}
export default Header;