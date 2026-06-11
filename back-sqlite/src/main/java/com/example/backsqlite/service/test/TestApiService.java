package com.example.backsqlite.service.test;

import java.time.Instant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backsqlite.dto.test.TestResponse;
import com.example.backsqlite.model.test.TestEntity;
import com.example.backsqlite.repository.test.TestEntityRepository;

@Service
public class TestApiService {

    private static final Logger log = LoggerFactory.getLogger(TestApiService.class);

    private final TestEntityRepository testEntityRepository;

    public TestApiService(TestEntityRepository testEntityRepository) {
        this.testEntityRepository = testEntityRepository;
    }

    @Transactional
    public TestResponse runTest() {
        log.info("Demarrage du test de connexion SQLite");

        TestEntity entity = new TestEntity();
        entity.setMessage("Connexion SQLite OK");
        entity.setCreatedAt(Instant.now());

        TestEntity saved = testEntityRepository.save(entity);
        long total = testEntityRepository.count();

        log.info("Test SQLite reussi : id enregistre={}, nombre total de lignes={}", saved.getId(), total);

        return new TestResponse("Test SQLite enregistre", saved.getId(), total, saved.getCreatedAt());
    }
}
