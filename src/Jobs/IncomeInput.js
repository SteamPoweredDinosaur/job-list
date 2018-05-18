import React, {Component} from "react"

export default class IncomeInput extends Component {
  render() {
    const options = this.props.selectOptions
    
    return (
        <div>
          <p>Income</p>
          <input type="text" />
        </div>
    )
  }
}
