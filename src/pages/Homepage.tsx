import React from 'react'
import HomeNavbar from '../components/navbars/HomeNavbar'
import { Container } from 'reactstrap'
import WelcomeBanner from '../components/home/WelcomeBanner'
import MedicalCoverageSection from '../components/home/MedicalCoverageSection'
import { imgBuyingLogo } from '../utils/Images'
import InclustionSection from '../components/home/InclustionSection'
import HomeFooter from '../components/footers/HomeFooter'
import LoginScreen from './auth/LoginScreen'
import MetricsCard from '../components/cards/MetricsCard'
import PlanCard from '../components/cards/PlanCard'
import SummaryPlanCard from '../components/cards/SummaryPlanCard'
import EventsNotification from '../components/notification/EventsNotification'
import CoverageTabs from '../components/tabs/CoverageTabs'
import PlanDetailsTable from '../components/tables/PlanDetailsTable'

function Homepage() {
  return (
    <Container fluid expand="lg">
        <HomeNavbar />
        <WelcomeBanner />
        <MedicalCoverageSection imageSrc={imgBuyingLogo} />
        <InclustionSection />
        <HomeFooter />
        <LoginScreen />
        <div className="d-flex gap-3">
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        </div>
        <div className="d-flex gap-3">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        </div>
        <div className="d-flex gap-3">
        <SummaryPlanCard />
        </div>
        <EventsNotification />
        <CoverageTabs />
        <PlanDetailsTable />
      </Container>
  )
}

export default Homepage