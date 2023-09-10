import React from 'react';
import TaskComponent from './listComponent';

const ListTask = ({ list, deleteTask, editTask }) => {
   return (
       <div>
           <div className={'panel panel-default'}>
               <div className="panel-heading">Tasks</div>
               <div className="panel-body">
                   {
                       list.map((task, index) => {
                           return (
                               <div key={index} className={'list-group-item col-sm-12'}>
                                   <TaskComponent deleteTask={deleteTask} editTask={editTask} task={task} />
                               </div>
                           );
                       })
                   }
               </div>
           </div>
       </div>
   );
}

export default ListTask;