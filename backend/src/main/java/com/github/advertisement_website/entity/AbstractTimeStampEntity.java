package com.github.advertisement_website.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.Instant;
@MappedSuperclass
public abstract class AbstractTimeStampEntity {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_time", nullable = false)
    public Timestamp createTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "update_time", nullable = false)
    public Timestamp updateTime;

    @PrePersist
    protected void onCreate() {
        updateTime = createTime = Timestamp.from(Instant.now());
    }

    @PreUpdate
    protected void onUpdate() {
        updateTime = Timestamp.from(Instant.now());
    }
}
