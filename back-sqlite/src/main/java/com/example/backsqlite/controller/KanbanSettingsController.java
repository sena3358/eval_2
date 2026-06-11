package com.example.backsqlite.controller;

import org.springframework.web.bind.annotation.*;
import com.example.backsqlite.model.KanbanSettings;
import com.example.backsqlite.repository.KanbanSettingsRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sqlite/kanban-settings")
public class KanbanSettingsController {
    private final KanbanSettingsRepository repository;

    public KanbanSettingsController(KanbanSettingsRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public KanbanSettings getSettings() {
        return repository.findById(1L).orElseGet(() -> {
            KanbanSettings defaultSettings = new KanbanSettings();
            return repository.save(defaultSettings);
        });
    }

    @PostMapping
    public KanbanSettings saveSettings(@RequestBody KanbanSettings settings) {
        settings.setId(1L); // On s'assure de toujours mettre a jour l'unique instance
        return repository.save(settings);
    }
}
