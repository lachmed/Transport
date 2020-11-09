import React from "react";
import {Link} from "react-router-dom";



const NavBar = () => {

        return(
            <nav>
            <ul>
                <li>
                    <Link to="/Transport.me/Voyage">
                         Voyages
                     </Link>
                </li>
                <li>
                    <Link to="/Transport.me/Colis">
                         Colis
                     </Link>
                </li>
                <li>
                    <Link to="/Transport.me/Tourisme">
                        Tourisme
                     </Link>
                </li>
                <li>
                    <Link to="/Transport.me/Contact">
                        Contact
                     </Link>
                </li>
            </ul>
        </nav>
        )
}


export default NavBar;