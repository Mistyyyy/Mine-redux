import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  onChangeUserInput(e) {
    this.props.onUserInputChange(e.target.value)
  }
  
  onChangeContentInput(e) {
    this.props.onCommentInputChange(e.target.value)
  }

  componentDidMount() {
    this.input.focus()
  }

  saveUserName(e) {
  }

  onCommit() {
    const { userInput, commentInput, onSubmitChange, onUserInputChange, onCommentInputChange } = this.props
    if (!userInput) {
      alert('请输入用户名')
      return false
    }
    if (!commentInput) {
      alert('请输入内容')
      return false
    }
    onSubmitChange()
    onUserInputChange('')
    onCommentInputChange('')
  }

  render() {
    const { userInput, commentInput } = this.props
    return (
      <div className="comment-input">
        <div className="comment-field">
          <label htmlFor="user" className="comment-field-name">用户名</label>
          <div className="comment-field-input">
            <input 
              type="text" 
              id="user" 
              value={userInput}
              ref={el => this.input =el}
              onBlur={this.saveUserName.bind(this)}
              onChange={this.onChangeUserInput.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <label htmlFor="content" className="comment-field-name">评论内容</label>
          <div className="comment-field-input">
            <textarea 
              id="content" 
              value={commentInput} 
              onChange={this.onChangeContentInput.bind(this)}
            >
            </textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.onCommit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

CommentInput.propTypes = {
  userInput: PropTypes.string,
  commentInput: PropTypes.string,
  onSubmitChange: PropTypes.func,
  onUserInputChange: PropTypes.func,
  onCommentInputChange: PropTypes.func,
}

export default CommentInput
