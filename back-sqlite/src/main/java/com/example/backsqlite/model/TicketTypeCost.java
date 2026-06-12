package com.example.backsqlite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ticket_type_costs")
public class TicketTypeCost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ticketId;
    private String itemtype;
    private Double cost;

    public TicketTypeCost() {}

    public TicketTypeCost(String ticketId, String itemtype, Double cost) {
        this.ticketId = ticketId;
        this.itemtype = itemtype;
        this.cost = cost;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTicketId() { return ticketId; }
    public void setTicketId(String ticketId) { this.ticketId = ticketId; }

    public String getItemtype() { return itemtype; }
    public void setItemtype(String itemtype) { this.itemtype = itemtype; }

    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }
}
