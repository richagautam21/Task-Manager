import { CREATE_TASK, EDIT_TASK, SET_SEARCH_TEXT, SET_STATUS_FILTER, DELETE_TASK } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = {
  task: [{
    title: 'title', 
    content: 'description',
    status: 'All', 
    id: '3678'
  }],
  searchText:'',
  statusFilter:'All'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TASK: {
      return {
        ...state,
        task: _.concat(...state.task, action.payload)
      }
    }
    case EDIT_TASK: {
      return {
        ...state,
        task: state.task.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload,
            };
          } else {
            return item;
          }
        }),
      };
    }
    
    case DELETE_TASK: {
      return {
        ...state,
        task: state.task.filter(item => action.payload !== item.id)
      }
    }
    case SET_STATUS_FILTER: {
      return {
        ...state,
        statusFilter: action.payload
      }
    }
    case SET_SEARCH_TEXT : {
      return {
         ...state,
        searchText: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer;
