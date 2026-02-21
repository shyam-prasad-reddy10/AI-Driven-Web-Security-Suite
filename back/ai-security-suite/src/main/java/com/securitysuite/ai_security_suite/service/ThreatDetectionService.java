package com.securitysuite.ai_security_suite.service;

import org.springframework.stereotype.Service;

import com.securitysuite.ai_security_suite.model.ThreatResponse;

@Service
public class ThreatDetectionService {

    public ThreatResponse analyze(String payload) {
        int score = 0;
        String type = "SAFE";

        String input = payload.toLowerCase();

        if(input.contains("or 1=1")) {
            score += 40;
            type = "SQL_INJECTION";
        }

        if(input.contains("union select")) {
            score += 50;
            type = "SQL_INJECTION";
        }

        if(input.contains("<script>")) {
            score += 60;
            type = "XSS";
        }

        if(input.contains("--")) {
            score += 20;
        }

        score = Math.min(score, 100);

        ThreatResponse response = new ThreatResponse();
        response.setAttackType(type);
        response.setRiskScore(score);
        response.setConfidence(score / 100.0);

        if(type.equals("SQL_INJECTION"))
            response.setOwaspCategory("A03: Injection");
        else if(type.equals("XSS"))
            response.setOwaspCategory("A03: Injection");
        else
            response.setOwaspCategory("None");

        return response;
    }
}
