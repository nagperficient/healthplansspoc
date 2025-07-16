import React from 'react';
import { Table } from 'reactstrap';

const PlanDetailsTable = () => (
  <Table bordered responsive>
    <thead>
      <tr>
        <th>Plan Category</th>
        <th>Customer Pays</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Medical Deductible</th>
        <td>
          Please see the Summary of Benefits for a list of services to which the $500 deductible applies.
        </td>
      </tr>
      <tr>
        <th scope="row">In-Network Maximum Out Of Pocket</th>
        <td>$6,800.00</td>
      </tr>
      <tr>
        <th scope="row">Part‑B Giveback</th>
        <td>
          Your plan includes a Part B Premium Giveback benefit of $50.00 that reduces your monthly Part B premium. You don’t have to take any action – just look for the savings in your monthly Social Security check or Part B statement.
        </td>
      </tr>
      <tr>
        <th scope="row">Doctor Office Visits</th>
        <td>$0 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Physician Specialist Services</th>
        <td>$40 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Medicare‑Covered Diagnostic Procedures and Tests</th>
        <td>
          $0‑40 copay<br/>
          Cost share may vary by the service rendered.
        </td>
      </tr>
      <tr>
        <th scope="row">Lab Services</th>
        <td>
          $0‑50 copay for Medicare‑covered lab services.<br/>
          Cost share may vary by the service rendered.
        </td>
      </tr>
      <tr>
        <th scope="row">Medicare‑Covered Diagnostic Radiology Services (not including x‑rays)</th>
        <td>
          $0‑300 copay for Medicare‑covered diagnostic radiology services (not including x‑rays).<br/>
          Cost share may vary by the service rendered.
        </td>
      </tr>
      <tr>
        <th scope="row">Medicare‑covered X‑Rays</th>
        <td>$35 copay for Medicare‑covered X‑rays.</td>
      </tr>
      <tr>
        <th scope="row">Emergency Room</th>
        <td>
          $110 copay per visit<br/><br/>
          Copay is waived if hospital admission occurs within 24 hours
        </td>
      </tr>
      <tr>
        <th scope="row">Urgently Needed Care</th>
        <td>$45 copay for Medicare‑covered urgently‑needed‑care visits.</td>
      </tr>
      <tr>
        <th scope="row">Inpatient Hospital Care</th>
        <td>
          $280 copay per day for days 1–5<br/>
          $0 copay per day for days 6–90.
        </td>
      </tr>
      <tr>
        <th scope="row">Outpatient Services/Surgery</th>
        <td>
          $0‑350 copay for Outpatient Hospital visits.<br/>
          Cost share may vary by the service rendered.
        </td>
      </tr>
      <tr>
        <th scope="row">Skilled Nursing Facility (SNF)</th>
        <td>
          $0 copay per day for days 1–20<br/>
          $214 copay per day for days 21–100.
        </td>
      </tr>
      <tr>
        <th scope="row">Ground Ambulance Services</th>
        <td>$270 copay per trip</td>
      </tr>
      <tr>
        <th scope="row">Occupational Therapy Services</th>
        <td>$35 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Physical and/or Speech and Language Therapy Visits</th>
        <td>$35 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Individual Sessions for Psychiatric Services</th>
        <td>$0 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Group Sessions for Psychiatric Services</th>
        <td>$0 copay</td>
      </tr>
      <tr>
        <th scope="row">Group Sessions for Mental Health Specialty Services</th>
        <td>$0 copay</td>
      </tr>
      <tr>
        <th scope="row">Individual Sessions for Mental Health Specialty Services</th>
        <td>$0 copay per individual session.</td>
      </tr>
      <tr>
        <th scope="row">Opioid Treatment</th>
        <td>$40 copay</td>
      </tr>
      <tr>
        <th scope="row">Home Health Care</th>
        <td>$0 copay per visit</td>
      </tr>
      <tr>
        <th scope="row">Medicare Part B Chemotherapy/Radiation Drugs</th>
        <td>
          0‑20% coinsurance<br/>
          Cost share may vary by the drug administered.
        </td>
      </tr>
      <tr>
        <th scope="row">Chiropractic Services</th>
        <td>$15 copay per visit for Medicare‑covered Chiropractic Services</td>
      </tr>
      <tr>
        <th scope="row">Podiatry Services</th>
        <td>$40 copay for Medicare‑covered Podiatry Services.</td>
      </tr>
      <tr>
        <th scope="row">Durable Medical Equipment</th>
        <td>20% coinsurance</td>
      </tr>
      <tr>
        <th scope="row">Prosthetic Devices</th>
        <td>20% coinsurance for Medicare‑covered Prosthetic Devices.</td>
      </tr>
      <tr>
        <th scope="row">Renal Dialysis</th>
        <td>20% coinsurance</td>
      </tr>
      <tr>
        <th scope="row">Diabetic Supplies</th>
        <td>$0 copay for preferred brand Medicare covered monitoring supplies.</td>
      </tr>
    </tbody>
  </Table>
);

export default PlanDetailsTable;
