import {CREATE_TASK, EDIT_TASK, DELETE_TASK, STATUS_FILTER_SET, SEARCH_TEXT_SET} from './index'

export const createTask = (request) => {
  return {
    type: CREATE_TASK,
    payload: request
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const setStatusFilter = (str) => {
  return {
    type: STATUS_FILTER_SET,
    payload: str
  }
}

export const setSearchText = (str) => {
  return {
    type: SEARCH_TEXT_SET,
    payload: str
  }
}

export const editTask = (request) => {
  return {
    type: EDIT_TASK,
    payload: request
  }
}
