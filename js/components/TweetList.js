import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'

class TweetList extends React.Component{
  render(){
    return(
      <div className="tweet-list">
        <Tweet/>
      </div>
    )
  }
}

export default TweetList
