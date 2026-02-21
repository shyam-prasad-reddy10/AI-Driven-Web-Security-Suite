import React, { useState } from "react";
import API from "../services/Api";
import axios from "axios";

function LoginMonitor() {
  const [data, setData] = useState({
    username: "",
    country: "",
    failedAttempts: 0,
    loginTime: ""
  });

  const [result, setResult] = useState(null);

  const checkLogin = async () => {
    const response = await API.post("/login-check", data);
    setResult(response.data);
  };

  return (
    <div className="container mt-4">
      <h3>Login Anomaly Detector</h3>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <input
        className="form-control mb-2"
        placeholder="Country"
        onChange={(e) => setData({ ...data, country: e.target.value })}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Failed Attempts"
        onChange={(e) =>
          setData({ ...data, failedAttempts: parseInt(e.target.value) })
        }
      />

      <input
        type="time"
        className="form-control mb-2"
        onChange={(e) => setData({ ...data, loginTime: e.target.value })}
      />

      <button className="btn btn-warning" onClick={checkLogin}>
        Analyze Login
      </button>

      {result && (
        <div className="card mt-4 p-3">
          <h5>Risk Level: {result.riskLevel}</h5>
          <p>Anomaly Score: {result.anomalyScore}</p>
          <p>Reason: {result.reason}</p>
        </div>
      )}
    </div>
  );
}

export default LoginMonitor;
