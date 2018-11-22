import React, { Component } from 'react'
import L from '../utils/localStorage'
export default (WrapperComponent, name) => {
  class LocalStorageActions extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      const item = L.getItem(name)
      this.setState({
        data: JSON.parse(item)
      })
    }

    savaData(value) {
      try {
        L.setItem(name, JSON.stringify(value))
      } catch(e) {
        L.setItem(name, value)
      }
    }

    clearData() {
      L.clearItem(name)
    }

    render() {
      return (
        <WrapperComponent
          data={this.state.data}
          saveData={this.savaData.bind(this)}
          clearData={this.clearData.bind(this)}
          {...this.props}
        />
      )
    }
  }
  return LocalStorageActions
}