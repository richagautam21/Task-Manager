import React, { useState}from 'react';
import ModalComponent from './modalComponent';

const ListComponent = (props) => {
  const [show, setShow] = useState(false); // Add this line

  const editClick = () => {
    setShow(true); // Show the modal when the edit icon is clicked
    props.editTask(props.task);

  }

  const deleteTask = (id) => {
    props.deleteTask(id);
  }

  const { title, status, content, id } = props.task;

  return (
    <div>
      <div className={'col-sm-6'}>
        <h4>{title} {"  "}<small>{content}</small></h4>
      </div>
      <div className={'col-sm-2'}>
        <h4><span className={`label label-${(status === 'All') ? "primary" : (status === 'Pending') ? "danger" : "warning"}`}>{status}</span>
        </h4>
      </div>
      <div className={'col-sm-1'} onClick={() => editClick()}>
        <h4><span className="glyphicon glyphicon-pencil" /></h4>
      </div>
      <div className={'col-sm-1'} onClick={() => deleteTask(id)}>
        <h4><span className={'glyphicon glyphicon-trash'} /></h4>
      </div>
      <ModalComponent  key={show} show={show} setShow={setShow} task={props.task} editTask={props.editTask}  />
    </div>
  );
}

export default ListComponent;
