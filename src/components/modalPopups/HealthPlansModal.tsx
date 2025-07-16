import React from 'react'
import HealthPlansForm from '../forms/HealthPlansForm'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

type Props = {
    isOpen: boolean,
    toggle: () => void,

}

const HealthPlansModal = (props: Props) => {
    const { isOpen, toggle } = props;
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} size='lg' className='shadow-lg'>
                <ModalHeader toggle={toggle}>Plan Details</ModalHeader>
                <ModalBody>
                    <HealthPlansForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default HealthPlansModal