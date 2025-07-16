import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InclustionSection from "./components/home/InclustionSection";
import MedicalCoverageSection from "./components/home/MedicalCoverageSection";
import { imgBuyingLogo } from "./utils/Images";
import HomeNavbar from "./components/navbars/HomeNavbar";
import WelcomeBanner from "./components/home/WelcomeBanner";
import HomeFooter from "./components/footers/HomeFooter";
import { Container } from "reactstrap";
import LoginScreen from "./pages/auth/LoginScreen";
import PlanCard from "./components/cards/PlanCard";
import MetricsCard from "./components/cards/MetricsCard";
import SummaryPlanCard from "./components/cards/SummaryPlanCard";
import EventsNotification from "./components/notification/EventsNotification";
import CoverageTabs from "./components/tabs/CoverageTabs";
import PlanDetailsTable from "./components/tables/PlanDetailsTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./pages/customers/Customers";
import CustomersHealthPlan from "./pages/customers/CustomersHealthPlan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Container fluid expand="lg">
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
      </Container> */}
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customershealthplan" element={<CustomersHealthPlan />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
