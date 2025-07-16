import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AlertModal(props) {
    const {toggle,customers, title} = props;


  return (
    <div>
      
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
         <h4>Updated Plan details for the below customers</h4>
            {customers?.map((val,index) => {
                return (
                    <Fragment key={index}><p>{val.customer_id} of the plan {val.plan_id}</p>
                    <p>Enrolled on {val.enrollment_date}</p></Fragment>
                )
            })}
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

export default AlertModal;