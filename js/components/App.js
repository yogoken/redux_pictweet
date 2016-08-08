import React from 'react'
import TweetForm from './TweetForm'
import TweetList from './TweetList'

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
