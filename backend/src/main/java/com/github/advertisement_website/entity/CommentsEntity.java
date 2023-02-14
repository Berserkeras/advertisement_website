package com.github.advertisement_website.entity;

import com.github.advertisement_website.entity.AbstractTimeStampEntity;
import com.github.advertisement_website.entity.AdBoardEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "comments")
@Getter
@Setter
public class CommentsEntity extends AbstractTimeStampEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "author_name", nullable = false)
    private String authorName;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ad_id", nullable = false)
    private AdBoardEntity ad;
}