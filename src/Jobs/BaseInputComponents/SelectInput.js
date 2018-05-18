import React, {Component} from "react"

export default class CurrentStatus extends Component {
  render() {
    const options = this.props.selectOptions
    
    return (
        <div>
          <p>{this.props.label}</p>
          <select>
            {options.map((value, i) => <option key={`${i}-${value}`} value={value}>{value}</option>)}
          </select>
        </div>
    )
  }
}
