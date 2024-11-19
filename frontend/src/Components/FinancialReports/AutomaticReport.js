import React, { useState } from "react";
import "./styles.css";

const AutomaticReports = () => {
  const [activeTab, setActiveTab] = useState("automatic");
  const reports = [
    { period: "Q3 2024", type: "Full catalog single report", amount: "871.38 €", status: "✔", actions: "Download" },
    { period: "August 2024", type: "Full catalog single report", amount: "165.83 €", status: "✔", actions: "Download" },
    { period: "July 2024", type: "Full catalog single report", amount: "443.87 €", status: "✔", actions: "Download" },
    { period: "Q2 2024", type: "Full catalog single report", amount: "1 936.36 €", status: "✔", actions: "Download" },
    { period: "May 2024", type: "Full catalog single report", amount: "560.22 €", status: "✔", actions: "Download" },
  ];

  return (
    <div className="reports-container"> 

      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Report Type</th>
              <th>Royalty Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.period}</td>
                <td>{report.type}</td>
                <td>{report.amount}</td>
                <td>{report.status}</td>
                <td>
                  <div className="action-buttons">
                    <button title="Download" className="action-button">
                      <i className="fas fa-download"></i>
                    </button>
                    <button title="View as PDF" className="action-button">
                      <i className="fas fa-file-pdf"></i>
                    </button>
                    <button title="Delete" className="action-button delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <button className="page">5</button>
        <button className="page">6</button>
      </div>
    </div>
  );
};

export default AutomaticReports;
