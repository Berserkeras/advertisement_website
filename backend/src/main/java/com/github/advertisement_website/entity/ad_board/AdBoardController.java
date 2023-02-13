package com.github.advertisement_website.entity.ad_board;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping(path="api/v1/ad-board")
@AllArgsConstructor
public class AdBoardController {

    private final AdBoardService adBoardService;

    @GetMapping
    public List<AdBoard> getAllBoardAds() {
        return adBoardService.getAllBoardAds();
    }
}
