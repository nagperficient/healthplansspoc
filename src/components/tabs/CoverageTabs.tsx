import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './CoverageTabs.css';

const CoverageTabs = () => {
  const [activeTab, setActiveTab] = useState('medicare');

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
          {/* Your Medicare Coverage content goes here */}
        </TabPane>
        <TabPane tabId="dental">
          {/* Your Dental content goes here */}
        </TabPane>
        <TabPane tabId="vision">
          {/* Your Vision content goes here */}
        </TabPane>
        <TabPane tabId="hearing">
          {/* Your Hearing content goes here */}
        </TabPane>
        <TabPane tabId="supplemental">
          {/* Your Supplemental content goes here */}
        </TabPane>
        <TabPane tabId="costs">
          {/* Your Total Costs content goes here */}
        </TabPane>
        <TabPane tabId="docs">
          {/* Your Plan Documents content goes here */}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CoverageTabs;
