import React from 'react';
import TodoListContainer from "./todo_list_container";
import TodoListItem from "./todo_list_item";
// import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    const listItems = this.props.todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} />
    ));
    return (
      <div className="list">
        <h1 onClick={this.props.receiveTodo}>
          Click to See To Dos
        </h1>
        <ul className='list-items'>
          {listItems}
        </ul>
      </div>
    );
  }

}



export default TodoList;
