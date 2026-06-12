package com.example.backsqlite.controller;

import com.example.backsqlite.model.TicketTypeCost;
import com.example.backsqlite.repository.TicketTypeCostRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sqlite/ticket-type-costs")
@CrossOrigin(origins = "*")
public class TicketTypeCostController {

    private final TicketTypeCostRepository repository;

    public TicketTypeCostController(TicketTypeCostRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<TicketTypeCost> getAll() {
        return repository.findAll();
    }

    @PostMapping("/batch")
    public List<TicketTypeCost> saveBatch(@RequestBody List<TicketTypeCost> costs) {
        return repository.saveAll(costs);
    }
    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
