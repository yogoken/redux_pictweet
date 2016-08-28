import { combineReducers } from 'redux'
import tweets from './tweets'

const tweetApp = combineReducers({
  tweets
})

export default tweetApp