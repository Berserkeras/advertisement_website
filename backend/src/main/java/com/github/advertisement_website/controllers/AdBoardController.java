package com.github.advertisement_website.controllers;

import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.model.response.DeleteAdBoardResponse;
import com.github.advertisement_website.model.response.MessageType;
import com.github.advertisement_website.services.AdBoardService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.UUID;

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
    public void addBoardAd(@RequestBody AdBoardEntity adBoardEntity) {
        adBoardService.addAd(adBoardEntity);
    }

    @DeleteMapping("/{adId}")
    public DeleteAdBoardResponse deleteBoardAdId(@PathVariable UUID adId) {
        adBoardService.deleteByAdId(adId);
        return new DeleteAdBoardResponse(MessageType.SUCCESS, "Ad deleted successfully");
    }
}
