package com.github.advertisement_website.controllers;

import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.model.response.AdBoardModel;
import com.github.advertisement_website.model.response.DeleteAdBoardResponse;
import com.github.advertisement_website.model.response.MessageType;
import com.github.advertisement_website.services.AdBoardService;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path="api/v1/ad-board")
public class AdBoardController {

    private final AdBoardService adBoardService;

    public AdBoardController(AdBoardService adBoardService) {
        this.adBoardService = adBoardService;
    }

    @GetMapping
    public List<AdBoardModel> getAllBoardAds() {
        return adBoardService.getAllBoardAds().stream()
                .map(adBoard -> new AdBoardDto(adBoard).toModel())
                .collect(Collectors.toList());
    }

    @PostMapping
    @CrossOrigin
    public void addBoardAd(@RequestBody AdBoardEntity adBoardEntity) {
        adBoardService.addAd(adBoardEntity);
    }

    @DeleteMapping("/{adId}")
    @CrossOrigin
    public DeleteAdBoardResponse deleteBoardAdId(@PathVariable UUID adId) {
        adBoardService.deleteByAdId(adId);
        return new DeleteAdBoardResponse(MessageType.SUCCESS, "Ad deleted successfully");
    }

    @GetMapping("/get-ad/{adId}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public AdBoardModel  getItemById(@PathVariable("adId") UUID adId) {
        AdBoardModel a = adBoardService.getItemByAdId(adId);
        System.out.println("RETURN VAL: " + a);
        return a;
    }
}
