import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../action';
import {VisibilityFilters} from '../action';

export const TodoList =({todoList,toggleTodo})=>{

    return(
     <>
        <ul>
          {todoList.map((todo)=>
          <li key={todo.id}  
          style={{textDecoration: todo.completed ? 'line-through' : 'none'}} 
          onClick={()=>toggleTodo(todo.id) }>{todo.text}</li>)}
        </ul>
     </>
    );
}

const VisibiltyFilter = (todoList, filter)=>{
  switch(filter)
  {
    case VisibilityFilters.SHOW_ACTIVE: 
     return todoList.filter((item)=>!item.completed)
   case VisibilityFilters.SHOW_COMPLETED: 
     return todoList.filter((item)=>item.completed)
   default: return todoList;
  }

}

const mapStateToProps = (state) => ({
    todoList: VisibiltyFilter(state.todo, state.visibilityFilter),
  })
  const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) =>dispatch(toggleTodo(id)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);