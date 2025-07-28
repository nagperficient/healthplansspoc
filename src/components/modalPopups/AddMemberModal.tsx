import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Badge } from 'reactstrap';
import AddMemberForm from '../forms/AddMemberForm';

function AddMemberModal(props) {
  const { toggle, title, message, isopen=true } = props;


  return (
    <div>

      <Modal isOpen={isopen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="text-primary">{title}</ModalHeader>
        <ModalBody>
          <AddMemberForm />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            close
          </Button>{' '}

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMemberModal;