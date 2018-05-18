import React, {Component} from "react"

export default class TextInput extends Component {
  render() {    
    return (
        <div>
          <p>{this.props.label}</p>
          <input type="text" />
        </div>
    )
  }
}
