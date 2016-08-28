import React from 'react'
import TweetForm from '../containers/TweetForm'
import TweetList from '../containers/TweetList'

class App extends React.Component{
  render(){
    return(
      <div className="contents row">
        <TweetForm/>
        <TweetList/>
      </div>
    );
  }
}

export default App