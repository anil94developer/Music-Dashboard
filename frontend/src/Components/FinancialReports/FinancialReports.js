import React, { useState } from 'react'
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
import AutomaticReports from './AutomaticReport';
import RequestedReports from './RequestedReports';
import "./styles.css";
export default function FinancialReport() {
const [activeTab, setActiveTab] = useState("automatic");
const reports = [
{ period: "Q3 2024", type: "Full catalog single report", amount: "871.38 €", status: "✔", actions: "Download" },
{ period: "August 2024", type: "Full catalog single report", amount: "165.83 €", status: "✔", actions: "Download" },
{ period: "July 2024", type: "Full catalog single report", amount: "443.87 €", status: "✔", actions: "Download" },
{ period: "Q2 2024", type: "Full catalog single report", amount: "1 936.36 €", status: "✔", actions: "Download" },
{ period: "May 2024", type: "Full catalog single report", amount: "560.22 €", status: "✔", actions: "Download" },
];
return (
<div>
  <SideBar/>
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="page-heading">
        <h1>Financial Reports</h1>
      </section>
      <section className="content">
        <div className="reports-outer">
          {/* 
          <h2>AVAILABLE REPORTS</h2>
          */}
          <div className="tabs">
            <button
            className={`tab ${activeTab === "automatic" ? "active" : ""}`}
            onClick={() => setActiveTab("automatic")}
            >
            Automatic reports
            </button>
            <button
            className={`tab ${activeTab === "requested" ? "active" : ""}`}
            onClick={() => setActiveTab("requested")}
            >
            Requested reports
            </button>
          </div>
          {activeTab === "automatic" ?
          <AutomaticReports />
          :
          <RequestedReports />
          }
        </div>
      </section>
    </div>
  </div>
</div>
)
}