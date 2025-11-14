import React, { useState } from "react";
import CollegeServiceForm from "./components/CollegeServiceForm";
import CollegeServiceList from "./components/CollegeServiceList";
import "./App.css";

function App() {
  const [editData, setEditData] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const refreshList = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1 className="app-title">College Management System</h1>
        <p className="app-subtitle">Efficiently manage college records</p>

        <div className="section-card">
          <CollegeServiceForm editData={editData} refreshList={refreshList} />
        </div>

        <div className="section-card">
          <CollegeServiceList
            key={refreshTrigger}
            onEdit={(college) => setEditData(college)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
