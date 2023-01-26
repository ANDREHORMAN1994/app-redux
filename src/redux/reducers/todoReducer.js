import { SAVE_TASK } from '../actions';

const INITIAL_STATE = {
  task: '',
  taskList: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case SAVE_TASK:
    return {
      ...state,
      task: action.payload,
      taskList: [ ...state.taskList, action.payload ]
    }
   default:
    return state;
 }
}

export default todoReducer;
