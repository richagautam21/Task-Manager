import { combineReducers } from 'redux';
import TaskReducer from './taskReducer'; //add this line
import darkModeReducer from "./darkModeReducer";

const rootReducer = combineReducers({
   task: TaskReducer,
   darkMode: darkModeReducer,
});

export default rootReducer;