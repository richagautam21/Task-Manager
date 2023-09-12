import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [content, setContent] = useState(props.task.content);
  const [status, setStatus] = useState(props.task.status);

  const editClick = () => {
    let editedObj = {
      id: props.task.id,
      title: title,
      content: content,
      status: status
    }
    // props.handleHide();
    props.editTask(editedObj);
    // Close the modal by setting show to false
    props.setShow(false);
  }

  return (
    <Modal
      showModal={true}
      // onHide={props.handleHide}
      onHide={() => props.setShow(false)} // Close the modal
      container={this}
      aria-labelledby="contained-modal-title-"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className={"col-sm-4"}>
          Title :
        </h5>
        <p className={'col-sm-8'}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id={'txtTitleText'}
            className={'form-control'}
          />
        </p>

        <h5 className={"col-sm-4"}>
          Description :
        </h5>
        <p className={'col-sm-8'}>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id={'txtDescription'}
            className={'form-control'}
          />
        </p>
        <h5 className={"col-sm-4"}>
          Status :
        </h5>
        <p className={'col-sm-8'}>
          <select
            id={"selPrioritytemp"}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={'form-control'}
          >
            <option value={'All'}>All</option>
            <option value={'Pending'}>Pending</option>
            <option value={'Completed'}>Completed</option>
          </select>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={editClick}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
