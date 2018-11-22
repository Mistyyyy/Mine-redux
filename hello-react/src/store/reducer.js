const initState = {
  commentlist: [],
  userInput: '',
  commentInput: ''
}

const ADD_COMMENT = 'ADD_COMMENT'
const RESET_COMMENT = 'RESET_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const USER_CHANGE = 'USER_CHANGE'
const COMMENT_CHANGE = 'COMMENT_CHANGE'

const reducers = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_COMMENT': 
      return {
        ...state,
        commentlist: [
          ...state.commentlist,
          {
            user: state.userInput,
            comment: state.commentInput
          }
        ]
      }
    case 'RESET_COMMENT': 
      return {
        ...state,
        commentList: action.value
      }
    case 'DELETE_COMMENT': 
      return {
        ...state,
        commentlist: [
          ...state.commentlist.slice(0,action.index),
          ...state.commentlist.slice(action.index + 1)
        ]
      }
    case 'USER_CHANGE':
      return {
        ...state,
        userInput: action.value
      }
    case 'COMMENT_CHANGE': 
      return {
        ...state,
        commentInput: action.value
      }
    default: 
      return state
  }
}

const addReducer = () => ({
  type: ADD_COMMENT
})
const resetReducer = value => ({
  type: RESET_COMMENT,
  value
})
const deleteReducer = index => ({
  type: DELETE_COMMENT,
  index
})
const userReducer = value => ({
  type: USER_CHANGE,
  value
})
const commentReducer = value => ({
  type: COMMENT_CHANGE,
  value
})

export default reducers
export { addReducer, resetReducer, deleteReducer, userReducer, commentReducer}

