package com.github.advertisement_website.ad_board;

import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class AdBoard {
    private Long id;
    private String title;
    private String description;
    private BigDecimal price;

    private AdCategory category;
    private BigInteger viewCount;
}
