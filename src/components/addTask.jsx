import React, { useState } from 'react';
import { useRef } from 'react';
const AddTask = ({ saveTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('All');

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  
  const handleSaveTask = () => {
    const newTaskObj = {
      title,
      description,
      status,
      id: new Date().valueOf()
    };
    saveTask(newTaskObj);
  
    // Reset the input field values
    setTitle('');
    setDescription('');
    setStatus('All');
  };
  

  return (
    <div className="panel panel-default">
      <div className="panel-heading">Add Task</div>
      <div className="panel-body">
        <div className="form-group">
          <div className="col-sm-3">
            <input
              className="form-control"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
            />
          </div>
          <div className="col-sm-5">
            <input
              className="form-control"
              placeholder="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              ref={descriptionRef}
            />
          </div>
          <div className="col-sm-2">
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-info" onClick={handleSaveTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );  
};  

export default AddTask;
