import React, { Component } from 'react'
import Comment from '../component/comment'
import PropTypes from 'prop-types'


class CommentList extends Component {
  handleDeleteItem(index) {
    this.props.onDeleteComment(index)
  }
  render() {
    const { commentlist } = this.props
    console.log(this.props)
    return (
      <div className="commentWrapper">
        {
          commentlist.map((item, index) => {
            return (
              <Comment 
                key={index} 
                commentUser={item.user} 
                commentContent={item.comment}
                onDelete={this.handleDeleteItem.bind(this)}
                index={index}
              />
            )
          })
        }
      </div>
    )
  }
}

CommentList.propTypes = {
  commentlist: PropTypes.array.isRequired,
  onDeleteComment: PropTypes.func,
}

export default CommentList