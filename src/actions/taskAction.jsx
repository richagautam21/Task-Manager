import {CREATE_TASK, EDIT_TASK, DELETE_TASK, SET_STATUS_FILTER,SET_SEARCH_TEXT } from './index'

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
    type: SET_STATUS_FILTER,
    payload: str
  }
}

export const setSearchText = (str) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: str
  }
}

export const editTask = (request) => {
  return {
    type: EDIT_TASK,
    payload: request
  }
}
