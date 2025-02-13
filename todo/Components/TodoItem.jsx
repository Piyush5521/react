
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
            <li className="list-group-item">{todoName} </li>
            </div>
        <div className="col-4">
            <li className="list-group-item">
                {todoDate}
            </li>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          > Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;