import React, { PropTypes } from 'react'

class Tweet extends React.Component{
  render(){
    let textField
    let imageField

    const {text, image, id, onClickDeleteButton, onBlurInputField} = this.props
    return(
      <div className="content__post" style={{ backgroundImage: `url(${image})`}}>
        <div className="more">
          <span>
            <img></img>
          </span>
          <ul className="more_list">
            <li>
              <a onClick={onClickDeleteButton}>削除</a>
            </li>
          </ul>
        </div>
        <p>{text}</p>
        <input type="text" defaultValue={text}
          onBlur={e => { onBlurInputField(e.target.value, imageField.value);}}
          ref={node => { textField = node }}
        />
        <br></br>
        <input type="text" defaultValue={image}
          onBlur={e => { onBlurInputField(textField.value ,e.target.value);}}
          ref={node => { imageField = node }}
        />
      </div>
    );
  }
}

Tweet.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  onBlurInputField: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Tweet