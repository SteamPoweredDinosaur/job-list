import React, {Component} from "react"
import SelectInput from "./BaseInputComponents/SelectInput"

export default class CurrentStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "statusOptions": [ "lime", "coconut" ]
    }
  }
  
  render() {
    const options = this.state.statusOptions
    
    return (
      <div>
        <SelectInput label={"What is your current status"} selectOptions={options} />
      </div>
    )
  }
}
