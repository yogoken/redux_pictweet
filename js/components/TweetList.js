import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'

class TweetList extends React.Component{
  render(){
    const {tweets, updateTweet, deleteTweet} = this.props
    return(
      <div className="tweet-list">
        {tweets.map((tweet) =>
          <Tweet
            key={tweet.id}
            {...tweet}
            onClickDeleteButton={() => deleteTweet(tweet.id)}
            onBlurInputField={(text, type) => updateTweet(tweet.id, text, type)}
          />
        )}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteTweet: PropTypes.func.isRequired,
  updateTweet: PropTypes.func.isRequired,
}

export default TweetList