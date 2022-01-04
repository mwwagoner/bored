import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">Games</Link>
                </li>
            </ul>
        </nav>
    )
}