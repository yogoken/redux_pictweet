import React from 'react'
import TweetForm from './TweetForm'
import TweetList from './TweetList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tweets: []
    }
  }
  uuid(){
    let i, random;
    let uuid = '';
    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }
  createTweet(text, image){
    this.setState({tweets: [...this.state.tweets, {id: this.uuid(), text, image}]})
  }
  deleteTweet(id){
    this.setState({tweets: this.state.tweets.filter(tweet => tweet.id !== id)})
  }
  updateTweet(id, text, type){
    const newTweets = this.state.tweets.map(t => {
      if( t.id == id ){
        if (type == "text"){
          t.text = text
        }
        else if (type == "image"){
          t.image = text
        }
      }
      return t
    })
    this.setState({tweets: newTweets})
  }
  render(){
    return(
      <div className="contents row">
        <TweetForm onSubmitTweetForm={this.createTweet.bind(this)}/>
        <TweetList tweets={this.state.tweets} deleteTweet={this.deleteTweet.bind(this)} updateTweet={this.updateTweet.bind(this)} />
      </div>
    );
  }
}

export default App