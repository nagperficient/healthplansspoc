import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Customers from "./pages/customers/Customers";
import CustomersHealthPlan from "./pages/customers/CustomersHealthPlan";

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/customers" element={<Customers />} />
            <Route path="/customershealthplan" element={<CustomersHealthPlan />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
