package com.example.backsqlite.dto.test;

import java.time.Instant;

public class TestResponse {
    private final String message;
    private final Long savedId;
    private final long totalCount;
    private final Instant createdAt;

    public TestResponse(String message, Long savedId, long totalCount, Instant createdAt) {
        this.message = message;
        this.savedId = savedId;
        this.totalCount = totalCount;
        this.createdAt = createdAt;
    }

    public String getMessage() {
        return message;
    }

    public Long getSavedId() {
        return savedId;
    }

    public long getTotalCount() {
        return totalCount;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}
