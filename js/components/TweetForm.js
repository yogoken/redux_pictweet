import React, { PropTypes } from 'react'

class TweetForm extends React.Component{
  render(){
    let textField
    let imageField
    const { onSubmitTweetForm } = this.props

    return(
      <div className="tweet-form">
        <form onSubmit={e => {
          e.preventDefault()
          if (!textField.value.trim() ||  !imageField.value.trim()) {
            return
          }
          onSubmitTweetForm(textField.value, imageField.value)
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

        <input type="submit" />
        </form>
      </div>
    )
  }
}

TweetForm.propTypes = {
  onSubmitTweetForm: PropTypes.func.isRequired
}

export default TweetForm