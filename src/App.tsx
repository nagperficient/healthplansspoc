import { useState } from "react";
import "./App.css";
import LoginScreen from "./pages/auth/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./pages/customers/Customers";
import CustomersHealthPlan from "./pages/customers/CustomersHealthPlan";
import Homepage from "./pages/Homepage";
import HealthLayout from "./pages/layouts/HealthLayout";
import { ToastContainer } from 'react-toastify';
import CustomersHealthPlanSingle from "./pages/customers/CustomersHealthPlanSingle";
import AuthLayout from "./pages/layouts/AuthLayout";
import ProfileScreen from "./pages/profile/ProfileScreen";

function App() {

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

          <Route index element={<Homepage />} />

          <Route path="/" element={<HealthLayout />}>

            <Route path="customers">
              
              <Route index element={<Customers />} />
              <Route path="healthplan">
                <Route index element={<CustomersHealthPlan />} />
                <Route path=":id/:name" element={<CustomersHealthPlanSingle />} />
              </Route>
            </Route>

          </Route>
          <Route path="/" element={<HealthLayout />}>
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<LoginScreen />} />
            
          </Route>


          {/* <Route path="/customers" element={<Customers />} /> */}
          {/*  <Route path="/customers" element={<HealthLayout />}>
            <Route path="/healthplan" element={<CustomersHealthPlan />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
}

export default App;
