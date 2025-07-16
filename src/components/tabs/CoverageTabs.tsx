import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './CoverageTabs.css';
import PlanDetailsTable from '../tables/PlanDetailsTable';

const CoverageTabs = (props:any) => {
  const [activeTab, setActiveTab] = useState('medicare');
  const selectedData = props;

  return (
    <div className="coverage-tabs-container">
      <Nav tabs className="coverage-tabs">
        <NavItem>
          <NavLink
            className={activeTab === 'medicare' ? 'active' : ''}
            onClick={() => setActiveTab('medicare')}
          >
            Medicare Coverage
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'dental' ? 'active' : ''}
            onClick={() => setActiveTab('dental')}
          >
            Dental
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'vision' ? 'active' : ''}
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'hearing' ? 'active' : ''}
            onClick={() => setActiveTab('hearing')}
          >
            Hearing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'supplemental' ? 'active' : ''}
            onClick={() => setActiveTab('supplemental')}
          >
            Supplemental
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'costs' ? 'active' : ''}
            onClick={() => setActiveTab('costs')}
          >
            Total Costs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'docs' ? 'active' : ''}
            onClick={() => setActiveTab('docs')}
          >
            Plan Documents
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="mt-4">
        <TabPane tabId="medicare">
          <PlanDetailsTable data={selectedData} />
          {/* Your Medicare Coverage content goes here */}
        </TabPane>
        <TabPane tabId="dental">
          {/* Your Dental content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
        <TabPane tabId="vision">
          {/* Your Vision content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
        <TabPane tabId="hearing">
          {/* Your Hearing content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
        <TabPane tabId="supplemental">
          {/* Your Supplemental content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
        <TabPane tabId="costs">
          {/* Your Total Costs content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
        <TabPane tabId="docs">
          {/* Your Plan Documents content goes here */}
          <div className="full-height-table-empty">No Data Available</div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CoverageTabs;
