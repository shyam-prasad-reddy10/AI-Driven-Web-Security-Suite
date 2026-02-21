package com.securitysuite.ai_security_suite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ThreatController {

    @Autowired
    private ThreatDetectionService service;

    @PostMapping("/analyze")
    public ThreatResponse analyze(@RequestBody ThreatRequest request) {
        return service.analyze(request.getPayload());
    }
    
    @Autowired
    private LoginAnomalyService loginService;

    @PostMapping("/login-check")
    public LoginResponse checkLogin(@RequestBody LoginRequest request) {
        return loginService.analyze(request);
    }
}

