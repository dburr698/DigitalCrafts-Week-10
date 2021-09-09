import { Component } from "react";
import { NavLink } from "react-router-dom";


class Menu extends Component {
    render() {
        return(
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/browse-movies'>Browse</NavLink>
                <NavLink to='/add-movie'>Add Movie</NavLink>

            </div>
        )
    }
}

export default Menu