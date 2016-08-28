import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createTweet } from '../actions'

class TweetForm extends React.Component{
  render(){
    let textField
    let imageField

    return(
      <div className="tweet-form">
        <form onSubmit={e => {
          e.preventDefault()
          if (!textField.value.trim() ||  !imageField.value.trim()) {
            return
          }
          this.props.createTweet(textField.value, imageField.value)
          textField.value = ''
          imageField.value = ''
        }}>
          <h3>投稿する</h3>
          <input ref={node => {
            textField = node
          }} />

          <input ref={node => {
            imageField = node
          }} />

        <input type="submit"></ input>
        </form>
      </div>
    )
  }
}

TweetForm.propTypes = {
  createTweet: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTweet: (text, image) => {
      dispatch(createTweet(text, image))
    }
  }
}

TweetForm = connect(mapStateToProps, mapDispatchToProps)(TweetForm)

export default TweetForm