package com.bit.allsimple.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public ResponseEntity<String> getHelloMessage() {
        return ResponseEntity.ok("Hello from Spring Boot!");
    }
}
