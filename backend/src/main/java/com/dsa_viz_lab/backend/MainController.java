package com.dsa_viz_lab.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/api/data")
    public String getData() {
        return "{\"message\": \"Backend of the DSA-VIZ-LAB Application\"}";
    }
    
}
