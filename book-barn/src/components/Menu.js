import { Component } from "react";
import '../styling/menu.css'

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <h1 className="logo">Story Shop</h1>
                <h2 className="link">Home</h2>
                <h2 className="link">My Books</h2>
                <h2 className="link">Browse</h2>
                <h2 className="link">Sign In</h2>
            </div>
        )
    }
}

export default Menu