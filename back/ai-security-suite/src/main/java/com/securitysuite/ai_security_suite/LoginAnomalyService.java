package com.securitysuite.ai_security_suite;

import org.springframework.stereotype.Service;

@Service
public class LoginAnomalyService {

    public LoginResponse analyze(LoginRequest request) {

        int score = 0;
        String reason = "";

        if (request.getFailedAttempts() > 3) {
            score += 40;
            reason += "Multiple failed attempts. ";
        }

        int hour = Integer.parseInt(request.getLoginTime().split(":")[0]);

        if (hour < 6 || hour > 23) {
            score += 30;
            reason += "Unusual login time. ";
        }

        score = Math.min(score, 100);

        String risk = score > 70 ? "HIGH" :
                      score > 40 ? "MEDIUM" : "LOW";

        LoginResponse response = new LoginResponse();
        response.setAnomalyScore(score);
        response.setRiskLevel(risk);
        response.setReason(reason);

        return response;
    }
}
