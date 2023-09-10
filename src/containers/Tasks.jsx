import { connect } from 'react-redux';
import React, { useState } from 'react';
import AddTask from '../components/addTask'
import FilterTask from '../components/filterTask'
import ListTask from '../components/listTask';
import { createTask, deleteTask, editTask, setStatusFilter, setSearchText } from '../actions/taskAction'

const Tasks = ({ tasks, createTask, deleteTask, editTask }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const taskPerPage = 5;

   const saveTask = (newTask) => {
       createTask(newTask);
   };

   const handleDeleteTask = (id) => {
       deleteTask(id);
   };

   const handleEditTask = (editedTask) => {
       editTask(editedTask);
   };

   const onStatusFilterChange = (value) => {
       setCurrentPage(1);
       setStatusFilter(value);
   };

   const onSearchTextChange = (text) => {
       setCurrentPage(1);
       setSearchText(text);
   };

   const indexOfLastTask = currentPage * taskPerPage;
   const indexOfFirstTask = indexOfLastTask - taskPerPage;
   const currentTask = tasks.slice(indexOfFirstTask, indexOfLastTask);
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(tasks.length / taskPerPage); i++) {
       pageNumbers.push(i);
   }

   return (
       <div className="row content">
           <div className="col-sm-2 sidenav">
               <FilterTask
                   onStatusFilterChange={onStatusFilterChange}
                   onSearchTextChange={onSearchTextChange}
               />
           </div>
           <div className={'col-sm-8 text-left'}>
               <AddTask saveTask={saveTask} />
               <ListTask
                   list={currentTask}
                   deleteTask={handleDeleteTask}
                   editTask={handleEditTask}
               />
               <ul className="pagination">
                   {pageNumbers.map((i, index) => {
                       return (
                           <li key={index} onClick={() => setCurrentPage(i)}>
                               <a>{i}</a>
                           </li>
                       );
                   })}
               </ul>
           </div>
       </div>
   );
};

const mapStateToProps = (state) => ({
   tasks: state.task.task,
});

const mapDispatchToProps = {
    createTask,
    deleteTask,
    editTask,
    setStatusFilter,
    setSearchText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
