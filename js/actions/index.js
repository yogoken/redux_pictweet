import $ from 'jquery'

const createTweet = (id, text, image) => {
  return {
    type: 'CREATE_TWEET',
    id,
    text,
    image
  }
}

export const createTweetAsync = (text, image) => {
  return (dispatch) => {
    return $.ajax({
      url: 'http://localhost:3000/api/tweets',
      type: 'post',
      dataType: 'json',
      data: { text, image }
    })
    .done(data => dispatch(createTweet(data.id, data.text, data.image)))
    .fail(data => console.log(data))
  }
}



const deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    id
  }
}


export const deleteTweetAsync = (id) => {
  return (dispatch) => {
    return $.ajax({
      url: `http://localhost:3000/api/tweets/${id}`,
      type: 'delete',
      dataType: 'json',
      data: { id: id }
    })
    .done(data => dispatch(deleteTweet(data.id)))
    .fail(data => console.log(data))
  }
}

export const updateTweet = (id, text, image) => {
  return {
    type: 'UPDATE_TWEET',
    id,
    text,
    image
  }
}

export const updateTweetAsync = (id, text, image) => {
  return (dispatch) => {
    return $.ajax({
      url: `http://localhost:3000/api/tweets/${id}`,
      type: 'put',
      dataType: 'json',
      data: { id, text, image }
    })
    .done(data => dispatch(updateTweet(data.id, data.text, data.image)))
    .fail(data => console.log(data))
  }
}

const receiveTweets = (tweets) => {
  return {
    type: 'RECEIVE_TWEETS',
    tweets
  }
}

export const fetchTweets = () => {
  return (dispatch) => {
    return $.getJSON('http://localhost:3000/api/tweets')
      .done(data => dispatch(receiveTweets(data.tweets)))
      .fail(data => console.log(data))
  }
}