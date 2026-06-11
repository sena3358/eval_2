package com.example.backsqlite.controller.reset;

import com.example.backsqlite.dto.reset.SqliteTableDto;
import com.example.backsqlite.dto.reset.SqliteTableResetRequest;
import com.example.backsqlite.dto.reset.SqliteTableResetResponse;
import com.example.backsqlite.service.reset.SqliteTableResetService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sqlite")
public class SqliteTableResetController {

    private final SqliteTableResetService service;

    public SqliteTableResetController(SqliteTableResetService service) {
        this.service = service;
    }

    @GetMapping("/tables")
    public List<SqliteTableDto> listTables() {
        return service.listTables();
    }

    @PostMapping("/tables/reset")
    public SqliteTableResetResponse resetTables(@RequestBody SqliteTableResetRequest request) {
        return service.resetTables(request);
    }
}
