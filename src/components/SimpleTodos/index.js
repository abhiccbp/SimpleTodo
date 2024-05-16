import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const FirstTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosList: FirstTodosList}
  deleteList = id => {
    const {initialTodosList} = this.state
    const abc = initialTodosList.filter(eachItem => eachItem.id !== id)
    this.setState({initialTodosList: abc})
  }
  render() {
    const {initialTodosList} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {initialTodosList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                deleteList={this.deleteList}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
