import React, { useState } from "react";
import "./styles.css";

const RequestedReports = () => {
  const [activeTab, setActiveTab] = useState("automatic");

  // Mock data for reports
  const reports = [
    {
      period: "August 2024",
      type: "Labels filtered single report",
      amount: "15.91 €",
      generationDate: "11/14/2024 18:52:30",
      status: "✔",
    },
    {
      period: "FROM July 2024 TO August 2024",
      type: "Labels filtered single report",
      amount: "68.86 €",
      generationDate: "10/21/2024 09:46:31",
      status: "✔",
    },
    {
      period: "Q2 2024",
      type: "Labels filtered single report",
      amount: "110.96 €",
      generationDate: "10/21/2024 09:43:17",
      status: "✔",
    },
    {
      period: "Q1 2024",
      type: "Labels filtered single report",
      amount: "95.96 €",
      generationDate: "10/21/2024 09:41:56",
      status: "✔",
    },
    {
      period: "Q4 2023",
      type: "Labels filtered single report",
      amount: "121.82 €",
      generationDate: "10/21/2024 09:39:52",
      status: "✔",
    },
  ];

  return (
    <div className="reports-container"> 
      {/* Table of reports */}
      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Report Type</th>
              <th>Royalty Amount</th>
              <th>Generation Date</th>
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
                <td>{report.generationDate}</td>
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

      {/* Pagination */}
      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <button className="page">5</button>
        <span>»</span>
        <button className="page">[17]</button>
      </div>
    </div>
  );
};

export default RequestedReports;
