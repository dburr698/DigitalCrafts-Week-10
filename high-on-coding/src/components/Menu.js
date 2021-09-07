import { Component } from 'react'
import '../styles/menu.css'

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="title">HighOnCoding</h1>
                <a className="link" href='#'>Home</a>
                <a className="link" href='#'>Category</a>
            </div>
        )
    }
}

export default Menu