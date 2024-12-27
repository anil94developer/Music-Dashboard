import React, { useState, useEffect } from "react";
import { base } from "../../Constants/Data.constant";
import { getData } from "../../Services/Ops";
import StreamGraph from "../Common/Chart/StreamGraph";
// import "./styles.css";

const AutomaticReports = () => {
  const [streamData, setStreamData] = useState([])
  const reports = [
    { period: "Q3 2024", type: "Full catalog single report", amount: "871.38 €", status: "✔", actions: "Download" },
    { period: "August 2024", type: "Full catalog single report", amount: "165.83 €", status: "✔", actions: "Download" },
    { period: "July 2024", type: "Full catalog single report", amount: "443.87 €", status: "✔", actions: "Download" },
    { period: "Q2 2024", type: "Full catalog single report", amount: "1 936.36 €", status: "✔", actions: "Download" },
    { period: "May 2024", type: "Full catalog single report", amount: "560.22 €", status: "✔", actions: "Download" },
  ];

  useEffect(() => {
    getGraphReport()
  }, [])
  const getGraphReport = async () => {
    let result = await getData(base.getStream);
    console.log("====================>", result.data)
    if (result?.data?.status) {
      setStreamData(result.data)
    }
  }
  // const getGraphReport = async () => {
  //   let result = await getData(base.getStream);
  //   console.log("====================>", result)
  // }
  return (
    <div className="reports-container">

      <div className="reports-table">
        <table className="user-table">
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
                      <i className="fa fa-download"></i>
                    </button>
                    <button title="View as PDF" className="action-button">
                      <i className="fa fa-file-pdf"></i>
                    </button>
                    <button title="Delete" className="action-button delete">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="content">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <StreamGraph list={streamData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomaticReports;
