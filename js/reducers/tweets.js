const tweet = (state, action) => {
  switch (action.type) {
    case 'CREATE_TWEET':
      return {
        id: action.id,
        text: action.text,
        image: action.image
      }
    case 'UPDATE_TWEET':
      if(state.id !== action.id){
        return state
      }
      return Object.assign({}, state, {
        text: action.text,
        image: action.image
      })
    default:
      return state
  }
}

const tweets = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TWEET':
      return [
        tweet(undefined, action),
        ...state
      ]
    case 'DELETE_TWEET':
      return state.filter(tweet =>
        tweet.id !== action.id
      );
    case 'UPDATE_TWEET':
      return state.map( t =>
        tweet(t, action)
      )
    case 'RECEIVE_TWEETS':
      return action.tweets
    default:
      return state
  }
}

export default tweets