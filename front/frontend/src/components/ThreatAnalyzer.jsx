import React, { useState } from "react";
import API from "../services/Api";
import axios from "axios";

function ThreatAnalyzer() {
  const [payload, setPayload] = useState("");
  const [result, setResult] = useState(null);

    const analyzeThreat = async () => {
    try {
      const response = await API.post("/analyze", {
        payload: payload
      });

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Backend connection failed!");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10">

        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h2 className="mb-4 text-center fw-bold">
            AI Threat Analyzer
          </h2>

          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Paste request payload..."
            onChange={(e) => setPayload(e.target.value)}
          ></textarea>

          <button
            className="btn btn-danger w-100"
            onClick={analyzeThreat}
          >
            Analyze
          </button>

          {result && (
            <div className="mt-4">
              <div className="alert alert-dark rounded-3">
                <h5>Attack Type reminding</h5>
                <p>Attack: {result.attackType}</p>
                <p>Risk Score: {result.riskScore}</p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  </div>
  );
}

export default ThreatAnalyzer;
