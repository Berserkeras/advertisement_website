package com.github.advertisement_website.ad_board;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path="api/v1/ad-board")
public class AdBoardController {

    @GetMapping
    public List<AdBoard> getAllBoardAds() {
        return Arrays.asList(
                new AdBoard(
                        1L,
                        "Washing Machine",
                        "new condition",
                        new BigDecimal("255.55"),
                        AdCategory.ELECTRONICS,
                        new BigInteger("73")),
                new AdBoard(
                        2L,
                        "Gaming Keyboard",
                        "old",
                        new BigDecimal("11.00"),
                        AdCategory.ELECTRONICS,
                        new BigInteger("15"))
        );
    }
}
