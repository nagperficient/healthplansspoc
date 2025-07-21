import { use } from 'react';
import { StoreContext } from '../../hooks/contexts/GlobalContext';
import HealthPlansForm from '../forms/HealthPlansForm'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

type Props = {
    isOpen: boolean,
    toggle: () => void,
    planId:string

}

const HealthPlansModal = (props: Props) => {
    const { isOpen, toggle, planId } = props;
    const { healthplansData } = use(StoreContext) as any;
    const selectedPlan = healthplansData?.find(val => val.id === planId)
    console.log(Object.keys(selectedPlan))
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} size='lg' className='shadow-lg'>
                <ModalHeader toggle={toggle} className="text-primary bg-light">Edit Plan</ModalHeader>
                <ModalBody>
                    <HealthPlansForm toggle={toggle} {...selectedPlan} />
                </ModalBody>
               
            </Modal>

        </div>
    )
}

export default HealthPlansModal