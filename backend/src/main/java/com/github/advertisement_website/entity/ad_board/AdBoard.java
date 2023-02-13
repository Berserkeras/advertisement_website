package com.github.advertisement_website.entity.ad_board;

import com.github.advertisement_website.entity.AbstractTimeStampEntity;
import com.github.advertisement_website.entity.comments.Comments;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class AdBoard  extends AbstractTimeStampEntity {
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

    @OneToMany(mappedBy = "ad",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    private List<Comments> comments = new ArrayList<>();

    public AdBoard(String title, String description, BigDecimal price, String city,
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
