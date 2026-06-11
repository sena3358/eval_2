package com.example.backsqlite.dto.reset;

import java.util.List;

public record SqliteTableResetRequest(List<String> tableNames) {}
