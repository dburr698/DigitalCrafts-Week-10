import React, { Component } from "react";
import Menu from './components/Menu'
import Featured from './components/Featured'
import ArticlesList from "./components/ArticlesList";

class App extends Component {
  render() {

    const articles = [
      {title: "Hello WatchKit", body: "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.", comments: 19, likes: 143},
      {title: "Introduction to Swift", body: "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.", comments: 26, likes: 185},
      {title: "Tilt Scrolling", body: "The tilt to scroll functionality has become an integral part of any text heavy application. The first time we got introduced to the tilt to scroll functionality was through the Instapaper application. In this article we will demonstrate how to implement this functionality using Core Motion API.", comments: 32, likes: 212}
    ]


    return (
      <div>
        <Menu/>
        <Featured />
        <ArticlesList allArticles = {articles}/>
      </div>
    )
  }

}

export default App;
