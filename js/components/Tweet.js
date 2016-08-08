import React, { PropTypes } from 'react'

class Tweet extends React.Component{
  render(){
    return(
      <div className="content__post">
        <div className="more">
          <span>
            <img></img>
          </span>
          <ul className="more_list">
            <li>
              <a>削除</a>
            </li>
          </ul>
        </div>
        <p>HelloWorld</p>
        <input type="text"/>
        <br></br>
        <input type="text"/>
      </div>
    );
  }
}


export default Tweet
