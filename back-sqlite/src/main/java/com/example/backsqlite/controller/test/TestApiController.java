package com.example.backsqlite.controller.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backsqlite.dto.test.TestResponse;
import com.example.backsqlite.service.test.TestApiService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sqlite")
public class TestApiController {
    private final TestApiService service;

    public TestApiController(TestApiService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public TestResponse runTest() {
        return service.runTest();
    }
}
