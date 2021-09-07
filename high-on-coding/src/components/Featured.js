import { Component } from 'react'
import '../styles/featured.css'

class Featured extends Component {
    render() {
        return (
            <div className="featuredArticle">
                <h2>Curse of the Current Review</h2>
                <p>When you want to buy any application from the Apple iTunes store 
                    you have more choices than you can handle. Most of the users scroll 
                    past the application description completely avoiding it like ads 
                    displayed on the right column of your webpage. Their choice is 
                    dependent on three important factors price, screenshot and reviews.</p>
            </div>
        )
    }
}

export default Featured