import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Badge } from 'reactstrap';

function AlertModal(props) {
  const { toggle, customers, title, message, isopen=true } = props;


  return (
    <div>

      <Modal isOpen={isopen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="text-primary">{title}</ModalHeader>
        <ModalBody>
          <Alert>
            <h4>Updated Plan details for the below customers</h4>
            {customers?.map((val, index) => {
              return (
                <Fragment key={index}>

                  <p>
                    Customer id: <Badge color="primary">
                      {val.customer_id}
                    </Badge> of the plan: <Badge color="info">{val.plan_id}</Badge>
                  </p>
                  <hr />
                  <p>{JSON.stringify(message)}</p>
                  <p>Enrolled on <Badge color="success">{val.enrollment_date}</Badge></p>
                </Fragment>
              )
            })}
          </Alert>
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