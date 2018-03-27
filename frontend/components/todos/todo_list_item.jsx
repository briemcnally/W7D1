import React from 'react';

const TodoListItem = (props) => {
  console.log(props);
  return (
	<div className="list-item">
    <span>
  		{props.todo.title}
  	</span>
	</div>
);
};

export default TodoListItem;

// class TodoListItem extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render () {
//     return(
//     	<div className="list-item">
//         <span>
//       		{this.props.todo.title}
//       	</span>
//     	</div>
//     );
//   }
// }
//
// export default TodoListItem;
