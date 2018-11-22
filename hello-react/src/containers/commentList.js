import CommentList from '../component/commentList'
import { connect } from 'react-redux'
import { deleteReducer, resetReducer } from '../store/reducer'


const mapState = state => ({
  commentlist: state.commentlist
})

const mapDispatch = dispatch => {
  return {
    onDeleteComment: index => dispatch(deleteReducer(index)),
    onResetComment: value => dispatch(resetReducer(value))
  }
}

export default connect(mapState, mapDispatch)(CommentList)