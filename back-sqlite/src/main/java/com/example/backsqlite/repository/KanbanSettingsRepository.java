package com.example.backsqlite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backsqlite.model.KanbanSettings;

public interface KanbanSettingsRepository extends JpaRepository<KanbanSettings, Long> {
}
