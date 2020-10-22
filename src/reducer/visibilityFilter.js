import {VisibilityFilters} from '../action';
import { act } from 'react-dom/test-utils';

const visibilityFilter =(state = VisibilityFilters.SHOW_ALL, action)=>{
console.log(action);
    switch(action.type){
     case 'SET_VISIBILITY_FILTER':
        return action.filter
        default:
      return state
    }
}
export default visibilityFilter;