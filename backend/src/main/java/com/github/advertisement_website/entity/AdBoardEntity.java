package com.github.advertisement_website.entity;

import com.github.advertisement_website.response.adboard.AdCategory;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@ToString
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ad_board")
public class AdBoardEntity extends AbstractTimeStampEntity {
    @Id
    @SequenceGenerator(
            name = "adboard_sequence",
            sequenceName = "adboard_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "adboard_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    private String title;
    private String description;
    private BigDecimal price;
    private String city;
    @Enumerated(EnumType.STRING)
    private AdCategory category;
    private String contactData;
    private BigInteger viewCount = BigInteger.ZERO;

    private byte[] image;

    private UUID ad_user_id;

    @OneToMany(mappedBy = "ad",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    private List<CommentsEntity> comments = new ArrayList<>();

    public AdBoardEntity(String title, String description, BigDecimal price, String city,
                         AdCategory category, BigInteger viewCount, String contactData) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.city = city;
        this.category = category;
        this.viewCount = viewCount;
        this.contactData = contactData;
    }
}
