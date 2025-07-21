import React, { use } from 'react'
import SummaryPlanCard from '../../components/cards/SummaryPlanCard'
import CoverageTabs from '../../components/tabs/CoverageTabs'
import { Col, Container, Row } from 'reactstrap'
import { StoreContext } from '../../hooks/contexts/GlobalContext'
import { useParams } from 'react-router-dom'
import { UserDataContext } from '../../hooks/contexts/UserContext'

type Props = {}

const CustomersHealthPlanSingle = (props: Props) => {
    const { id, name } = useParams();
    const {  healthplansData } = use(StoreContext) as any;
    const selectedPlan = healthplansData?.find(val => +val.id === +id)
    console.log(healthplansData,"healthplansData")
    return (
        <div>
            <Container>
                <Row className="gap-3 my-5">
                    <Col md="12">
                        <SummaryPlanCard {...selectedPlan} />
                    </Col>
                    <Col md="12">
                    
                        <CoverageTabs {...selectedPlan} /></Col>
                </Row>

            </Container>

        </div>
    )
}

export default CustomersHealthPlanSingle