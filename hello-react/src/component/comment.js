import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends  Component {
  _getProcessedContent (content) {
    return content
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  handleDelete() {
    console.log(this.props)
    const { index } = this.props
    this.props.onDelete(index)
  }
  render() {
    const { commentUser, commentContent} = this.props
    return (
      <div className="comment" style={{position: 'relative'}}>
        <div className="comment-user">
          <span>
            {commentUser}
          </span>
        </div>
        <p className="comment-content" dangerouslySetInnerHTML={{__html: this._getProcessedContent(commentContent)}}></p>
        {/* <span style={{position: 'absolute', bottom: '10px', right: '10px'}}>{this.state.timeString}</span> */}
        <button style={{position: 'absolute', top: '10px', right: '10px'}} onClick={this.handleDelete.bind(this)}>delete</button>
      </div>
    )
  }
}

Comment.propTypes = {
  commentUser: PropTypes.string,
  commentContent: PropTypes.string,
  onDelete: PropTypes.func,
  index: PropTypes.number
}


export default Comment 
