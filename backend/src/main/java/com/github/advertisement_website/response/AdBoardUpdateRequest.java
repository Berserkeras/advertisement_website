package com.github.advertisement_website.response;

import java.math.BigDecimal;

public record AdBoardUpdateRequest(

    String title,
    String city,
    String contact_data,
    String description,
    BigDecimal price
) {
}
