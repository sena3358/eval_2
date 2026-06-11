package com.example.backsqlite.repository.test;

import java.sql.PreparedStatement;
import java.sql.Statement;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.example.backsqlite.model.test.TestEntity;

@Repository
public class TestEntityRepository {
    private final JdbcTemplate jdbcTemplate;

    public TestEntityRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public TestEntity save(TestEntity entity) {
        String sql = "INSERT INTO test_entities (message, created_at) VALUES (?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, entity.getMessage());
            statement.setString(2, entity.getCreatedAt().toString());
            return statement;
        }, keyHolder);

        Number key = keyHolder.getKey();
        if (key != null) {
            entity.setId(key.longValue());
        }

        return entity;
    }

    public long count() {
        Long total = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM test_entities", Long.class);
        return total != null ? total : 0L;
    }
}
