package com.github.advertisement_website.controllers;

import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.services.AdBoardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(path="api/v1/ad-board")
@AllArgsConstructor
public class AdBoardController {

    private final AdBoardService adBoardService;

    @GetMapping
    public List<AdBoardEntity> getAllBoardAds() {
        return adBoardService.getAllBoardAds();
    }

    @PostMapping
    @CrossOrigin
    public void addAd(@RequestBody AdBoardEntity adBoardEntity) {
        adBoardService.addAd(adBoardEntity);
    }
}
