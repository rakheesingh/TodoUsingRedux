import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter, VisibilityFilters} from '../action';

export const FilterTab =({active, filterApply})=>{
    console.log(active);
    return(
     <div>
     <span>Show: </span>
    <button disabled={active} onClick={()=> filterApply(VisibilityFilters.SHOW_ALL)}>All</button>
    <button disabled={active} onClick={()=> filterApply(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
    <button disabled={active} onClick={()=> filterApply(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
     </div>);
}
 const mapStateToProps=(state,ownProps) =>({
 active: state.VisibilityFilter,
 })

const mapDispatchToProps=(dispatch)=>
({
filterApply: (filter)=>dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterTab);