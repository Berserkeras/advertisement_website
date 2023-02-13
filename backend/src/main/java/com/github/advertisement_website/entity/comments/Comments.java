package com.github.advertisement_website.entity.comments;

import com.github.advertisement_website.entity.AbstractTimeStampEntity;
import com.github.advertisement_website.entity.ad_board.AdBoard;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "comments")
@Getter
@Setter
public class Comments extends AbstractTimeStampEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "author_name", nullable = false)
    private String authorName;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ad_id", nullable = false)
    private AdBoard ad;
}