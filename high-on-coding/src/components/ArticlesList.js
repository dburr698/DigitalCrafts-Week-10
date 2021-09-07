import { Component } from 'react'
import '../styles/articlesList.css'

class ArticlesList extends Component {
    render() {

        const articleItems = this.props.allArticles.map((article, index) => {
            return <li key={index}>
                <h3 className="articleTitle">{article.title}</h3>
                <p className="articleBody">{article.body}</p>
                <div className="articleFooter">
                    <strong className="footerItem">{article.comments} Comments</strong>
                    <strong className="footerItem">{article.likes} Likes</strong>
                </div>
            </li>
        })


        return (
            <ul className="articlesList">
                {articleItems}
            </ul>

        )
    }
}

export default ArticlesList