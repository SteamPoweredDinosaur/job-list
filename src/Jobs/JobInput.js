import React, {Component} from "react"
import SelectInput from "./SelectInput"
import IncomeInput from "./IncomeInput"
import TextInput from "./TextInput"

export default class JobInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {    
    return (
      <div>
        <SelectInput label={`Job ${this.props.jobNumber}`} selectOptions={["Farmer", "Baker"]}/>
        <TextInput label="Company Name" />
        <IncomeInput />
      </div>
    )
  }
}
