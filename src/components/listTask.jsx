import React from 'react';
import ListComponent from './listComponent';

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
                                   <ListComponent deleteTask={deleteTask} editTask={editTask} task={task} />
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