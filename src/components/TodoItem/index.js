import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteList} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteList(id)
  }
  return (
    <li className="cont3">
      <p>{title}</p>
      <button onClick={onDelete} className="btn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
