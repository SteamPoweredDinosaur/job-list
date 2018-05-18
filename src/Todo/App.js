import React, {Component} from "react"
import {Button, ListGroupItem, ListGroup} from "react-bootstrap"

export default class App extends Component {
  constructor(props) {
    super(props)


    
    let data = []

    try {
       data = JSON.parse(localStorage.getItem('todo-list'))
       // handle case when local storage not set yet
       data = data ? data : []
    } catch(error) {
      console.log("Corrupted List in local storage")
    }

    this.state = {
      data
    }
  }

  handleClick = () => {
    const p = prompt();

    // P not defined if user presses cancel on prompt, should not be added to state in this case
    if(!p) {
      return;
    }

    this.setState(({data}) => {
      data.push(p)
      localStorage.setItem('todo-list', JSON.stringify(data));
      return {data}
    })
  }

  render() {
    const list = [...this.state.data]

    return (
      <div>
        {list.length === 0 ? 
                <p>Nothing added</p> :         
                <ListGroup>
                  {list.map((item, i) =>
                    <ListGroupItem key={i}>{item}</ListGroupItem>)
                  }
                </ListGroup>}
        
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
