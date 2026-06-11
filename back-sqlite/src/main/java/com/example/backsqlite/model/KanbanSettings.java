package com.example.backsqlite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "kanban_settings")
public class KanbanSettings {
    @Id
    private Long id = 1L; // Instance unique pour les reglages globaux

    private String colorNew = "#f8fafc";
    private String colorProgress = "#f0f9ff";
    private String colorDone = "#f0fdf4";

    private String labelNew = "Nouveau";
    private String labelProgress = "En cours";
    private String labelDone = "Terminé";

    public KanbanSettings() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getColorNew() { return colorNew; }
    public void setColorNew(String colorNew) { this.colorNew = colorNew; }

    public String getColorProgress() { return colorProgress; }
    public void setColorProgress(String colorProgress) { this.colorProgress = colorProgress; }

    public String getColorDone() { return colorDone; }
    public void setColorDone(String colorDone) { this.colorDone = colorDone; }

    public String getLabelNew() { return labelNew; }
    public void setLabelNew(String labelNew) { this.labelNew = labelNew; }

    public String getLabelProgress() { return labelProgress; }
    public void setLabelProgress(String labelProgress) { this.labelProgress = labelProgress; }

    public String getLabelDone() { return labelDone; }
    public void setLabelDone(String labelDone) { this.labelDone = labelDone; }
}
