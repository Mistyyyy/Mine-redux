import React, { Component } from 'react'
import CommentInput from '../containers/commentInput'
import CommentList from '../containers/commentList'

class CommentApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp