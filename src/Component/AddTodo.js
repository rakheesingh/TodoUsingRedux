import React, {useRef} from 'react';
import {addTodo} from '../action';
import { connect } from 'react-redux'

 const AddTodo= ({onClick})=>{
    let inputEl = useRef(null);

    return(
        <>
       <form onSubmit={(e) =>{e.preventDefault(); onClick(inputEl.current.value); inputEl.current.value='';}}>
        <label>
        <input ref={inputEl} name="todo" type="text" required/>
        </label>
        <input  type="submit" value="Add Todo" />
       </form>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onClick: (value) => dispatch(addTodo(value)),
  })
export default connect(null, mapDispatchToProps)(AddTodo);



