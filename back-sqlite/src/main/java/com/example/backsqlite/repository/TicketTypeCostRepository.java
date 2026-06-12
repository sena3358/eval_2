package com.example.backsqlite.repository;

import com.example.backsqlite.model.TicketTypeCost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketTypeCostRepository extends JpaRepository<TicketTypeCost, Long> {
    List<TicketTypeCost> findByTicketId(String ticketId);
}
