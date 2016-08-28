import React, { PropTypes } from 'react'
import Tweet from '../components/Tweet'
import { connect } from 'react-redux'
import { deleteTweetAsync, updateTweetAsync, fetchTweets } from '../actions'

class TweetList extends React.Component{
  componentDidMount(){
    this.props.fetchTweets()
  }
  render(){
    const {tweets, updateTweetAsync, deleteTweetAsync} = this.props
    return(
      <div className="tweet-list">
        {tweets.map((tweet) =>
          <Tweet
            key={tweet.id}
            {...tweet}
            onClickDeleteButton={() => deleteTweetAsync(tweet.id)}
            onBlurInputField={(text, image) => updateTweetAsync(tweet.id, text, image)}
          />
        )}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteTweetAsync: PropTypes.func.isRequired,
  updateTweetAsync: PropTypes.func.isRequired,
  fetchTweets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTweetAsync: (id) => {
      dispatch(deleteTweetAsync(id))
    },
    updateTweetAsync: (id, text, image) => {
      dispatch(updateTweetAsync(id, text, image))
    },
    fetchTweets: () => {
      dispatch(fetchTweets())
    }
  }
}

TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList)

export default TweetList