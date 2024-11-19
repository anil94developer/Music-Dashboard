import React, { useState } from "react";
import { Nav } from "../Common/Nav";
import "./UserAccessForm.css"; // Include CSS file for styling

function UserAccessForm() {
  const [user, setUser] = useState({
    login: "",
    email: "",
    permissionLevel: "Standard user",
    news: true,
    newRelease: {
      newRelease: false,
      oneRelease: false,
      multipleReleases: false,
    },
    catalog: {
      allReleases: false,
      drafts: false,
      correctionRequested: false,
    },
    analytics: {
      dailyTrends: false,
      playlistsCharts: false,
      shortFormVideos: false,
      videoTrends: false,
    },
    catalogScope: {
      artists: "",
      labels: "",
      channels: "",
    },
    Analytics: {
        dailyTrends: false,
        playlistsCharts: false,
        shortFormVideos: false,
        videoTrends: false,
        catalogOptimization: false, // Optional addition
      },
      Promotion: {
        allProducts: false, // Example flag for "All Products"
      },
      Financial: {
        financialReports: false, // Example flag for "Financial Reports"
      },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const [category, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        [category]: { ...prev[category], [key]: checked },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div>
    <Nav />
    <div class="content-wrapper">
      <section class="content">

    <div className="form-container">
      <h2>User Access Management</h2>

      <div className="form-grid">
        {/* Contact Information */}
        <div className="form-section">
          <h3>Contact Information</h3>
          <label>
            Login:
            <input
              type="text"
              name="login"
              value={user.login}
              onChange={handleInputChange}
              placeholder="Enter login"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </label>
        </div>

        {/* User Access */}
        <div className="form-section">
          <h3>User Access</h3>
          <label>
            Permission Level:
            <select
              name="permissionLevel"
              value={user.permissionLevel}
              onChange={handleInputChange}
            >
              <option value="Standard user">Standard user</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              name="news"
              checked={user.news}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, news: e.target.checked }))
              }
            />
            News
          </label>
        </div>

        {/* Catalog Scope */}
        <div className="form-section">
          <h3>Catalog Scope</h3>
          <label>
            Artists:
            <input
              type="text"
              name="catalogScope.artists"
              value={user.catalogScope.artists}
              onChange={handleInputChange}
              placeholder="Enter artists"
            />
          </label>
          <label>
            Labels:
            <input
              type="text"
              name="catalogScope.labels"
              value={user.catalogScope.labels}
              onChange={handleInputChange}
              placeholder="Enter labels"
            />
          </label>
          <label>
            Channels:
            <input
              type="text"
              name="catalogScope.channels"
              value={user.catalogScope.channels}
              onChange={handleInputChange}
              placeholder="Enter channels"
            />
          </label>
        </div>
      </div>

      {/* New Release Section */}
      <div className="checkbox-section">
        <h3>New Release</h3>
        <label>
          <input
            type="checkbox"
            name="newRelease.newRelease"
            checked={user.newRelease.newRelease}
            onChange={handleInputChange}
          />
          New Release
        </label>
        <label>
          <input
            type="checkbox"
            name="newRelease.oneRelease"
            checked={user.newRelease.oneRelease}
            onChange={handleInputChange}
          />
          One Release
        </label>
        <label>
          <input
            type="checkbox"
            name="newRelease.multipleReleases"
            checked={user.newRelease.multipleReleases}
            onChange={handleInputChange}
          />
          Multiple Releases
        </label>
      </div>

      {/* Catalog Section */}
      <div className="checkbox-section">
        <h3>Catalog</h3>
        <label>
          <input
            type="checkbox"
            name="catalog.allReleases"
            checked={user.catalog.allReleases}
            onChange={handleInputChange}
          />
          All Releases
        </label>
        <label>
          <input
            type="checkbox"
            name="catalog.drafts"
            checked={user.catalog.drafts}
            onChange={handleInputChange}
          />
          Drafts
        </label>
        <label>
          <input
            type="checkbox"
            name="catalog.correctionRequested"
            checked={user.catalog.correctionRequested}
            onChange={handleInputChange}
          />
          Correction Requested
        </label>
      </div>

      {/* Analytics Section */}
      <div className="checkbox-section">
        <h3>Analytics</h3>
        <label>
          <input
            type="checkbox"
            name="analytics.dailyTrends"
            checked={user.analytics.dailyTrends}
            onChange={handleInputChange}
          />
          Daily Trends
        </label>
        <label>
          <input
            type="checkbox"
            name="analytics.playlistsCharts"
            checked={user.analytics.playlistsCharts}
            onChange={handleInputChange}
          />
          Playlists & Charts
        </label>
        <label>
          <input
            type="checkbox"
            name="analytics.shortFormVideos"
            checked={user.analytics.shortFormVideos}
            onChange={handleInputChange}
          />
          Short-form Videos
        </label>
        <label>
          <input
            type="checkbox"
            name="analytics.videoTrends"
            checked={user.analytics.videoTrends}
            onChange={handleInputChange}
          />
          Video Trends
        </label>
      </div>

    </div>
    </section>
    </div>
    </div>
  );
}

export default UserAccessForm;
