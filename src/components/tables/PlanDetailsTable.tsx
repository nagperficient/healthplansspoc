import React from 'react';
import { Table } from 'reactstrap';

const fields = [
  "id",
  "plan_name",
  "plan_type",
  "provider",
  "coverage_area",
  "monthly_premium",
  "deductible",
  "coinsurance",
  "copay_primary",
  "copay_specialist",
  "out_of_pocket_max",
  "network_type",
  "referral_required",
  "includes_prescription",
  "dental_coverage",
  "vision_coverage",
  "plan_url",
  "plan_notes",
  "effective_date"
];

const PlanDetailsTable = (props: any) => {
  const { data } = props
  console.log(props, "props")
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Plan Data</th>
          <th>Customer info</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((val, index) => {
          return <tr key={index}>
            <th scope="row" className=''>{val && val?.
              replace(/_/g, " ")
              ?.replace(/\b\w/g, char => char.toUpperCase())
            }</th>
            <td>
              {data && data[val]?.toString()}
              { }
            </td>
          </tr>
        })}

      </tbody>
    </Table>
  )
};

export default PlanDetailsTable;
