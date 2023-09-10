import { CREATE_TASK, EDIT_TASK, SEARCH_TEXT_SET, STATUS_FILTER_SET, DELETE_TASK } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = {
  task: [{
    title: 'title', 
    content: 'description',
    status: 'All', 
    id: '3678'
  }],
  searchText:'',
  StatusFilter:'All'
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
    case STATUS_FILTER_SET: {
      return {
        ...state,
        statusFilter: action.payload
      }
    }
    case SEARCH_TEXT_SET : {
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
