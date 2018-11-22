import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CommentApp from '../component/commentApp'
import store from '../store/store'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <CommentApp />
      </Provider>
    )
  }
}