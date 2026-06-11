package com.example.backsqlite.service.reset;

import com.example.backsqlite.dto.reset.SqliteTableDto;
import com.example.backsqlite.dto.reset.SqliteTableResetRequest;
import com.example.backsqlite.dto.reset.SqliteTableResetResponse;
import com.example.backsqlite.repository.reset.SqliteTableResetRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class SqliteTableResetService {

    private static final Logger log = LoggerFactory.getLogger(SqliteTableResetService.class);

    private final SqliteTableResetRepository repository;

    public SqliteTableResetService(SqliteTableResetRepository repository) {
        this.repository = repository;
    }

    public List<SqliteTableDto> listTables() {
        return repository.listTableNames().stream()
                .map(name -> new SqliteTableDto(name, repository.countRows(name)))
                .toList();
    }

    @Transactional
    public SqliteTableResetResponse resetTables(SqliteTableResetRequest request) {
        try {
            // Validation contre les tables reelles pour eviter toute injection
            Set<String> validTables = Set.copyOf(repository.listTableNames());
            List<String> toReset = request.tableNames().stream()
                    .filter(validTables::contains)
                    .toList();

            long totalDeleted = 0;
            List<String> resetTables = new ArrayList<>();

            for (String tableName : toReset) {
                int deleted = repository.deleteAllRows(tableName);
                totalDeleted += deleted;
                resetTables.add(tableName);
                log.info("Table {} : {} ligne(s) supprimee(s)", tableName, deleted);
            }

            return new SqliteTableResetResponse(
                    true,
                    "Reinitialisation terminee avec succes",
                    resetTables,
                    totalDeleted);
        } catch (Exception e) {
            log.error("Erreur lors de la reinitialisation des tables SQLite", e);
            return new SqliteTableResetResponse(
                    false,
                    "Erreur : " + e.getMessage(),
                    List.of(),
                    0);
        }
    }
}
