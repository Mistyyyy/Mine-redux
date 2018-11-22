import CommentInput from '../component/commentInput'
import { connect } from 'react-redux'
import { userReducer, commentReducer, addReducer } from '../store/reducer'

const mapState = state => ({
  userInput: state.userInput,
  commentInput: state.commentInput
})

const mapDispatch = dispatch => {
  return {
    onUserInputChange: value => dispatch(userReducer(value)),
    onCommentInputChange: value => dispatch(commentReducer(value)),
    onSubmitChange: () => dispatch(addReducer())
  }
}

export default connect(mapState, mapDispatch)(CommentInput)