package com.example.backsqlite.dto.reset;

import java.util.List;

public record SqliteTableResetResponse(
        boolean success,
        String message,
        List<String> resetTables,
        long totalRowsDeleted) {}
