package com.github.advertisement_website.controllers;

import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.exception.AdNotFoundException;
import com.github.advertisement_website.model.AdBoardModel;
import com.github.advertisement_website.response.DeleteAdBoardResponse;
import com.github.advertisement_website.response.AdBoardUpdateRequest;
import com.github.advertisement_website.services.AdBoardService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path="api/v1/ad-board")
public class AdBoardController {

    private final AdBoardService adBoardService;

    public AdBoardController(AdBoardService adBoardService) {
        if (adBoardService == null) {
            throw new NullPointerException("AdBoardService cannot be null");
        }
        this.adBoardService = adBoardService;
    }

    @GetMapping
    @CrossOrigin
    public List<AdBoardModel> getAllBoardAds() {
        return adBoardService.getAllBoardAds().stream()
                .map(adBoard -> new AdBoardDto(adBoard).toModel())
                .collect(Collectors.toList());
    }

    @PostMapping
    @CrossOrigin
    public void addBoardAd(@RequestBody AdBoardEntity adBoardEntity) {
        if (adBoardEntity == null) {
            throw new IllegalArgumentException("AdBoardEntity cannot be null");
        }
        adBoardService.addAd(adBoardEntity);
    }

    @DeleteMapping("/{adId}")
    @CrossOrigin
    public DeleteAdBoardResponse deleteBoardAdId(@PathVariable UUID adId) {
        if (adId == null) {
            throw new AdNotFoundException(HttpStatus.NOT_FOUND, "Ad not found for deletion");
        }
        adBoardService.deleteByAdId(adId);
        return new DeleteAdBoardResponse("Ad deleted successfully");
    }

    @GetMapping("/get-ad/{adId}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public AdBoardModel  getItemById(@PathVariable("adId") UUID adId) {
        if (adId == null) {
            throw new IllegalArgumentException("AdId cannot be null");
        }
        System.out.println("Get Request! UUID: " + adId);
        try {
            AdBoardModel a = adBoardService.getItemByAdId(adId);
            System.out.println("RETURN VAL: " + a);
            return a;
        } catch (NoSuchElementException e) {
            throw new AdNotFoundException("Ad not found");
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error getting ad", e);
        }
    }

    @PutMapping("/update-ad/{adId}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public void updateAd(
            @PathVariable("adId") UUID adId,
            @RequestBody AdBoardUpdateRequest updateRequest) {
        if (adId == null) {
            throw new IllegalArgumentException("AdId cannot be null");
        }
        if (updateRequest == null) {
            throw new IllegalArgumentException("UpdateRequest cannot be null");
        }
        System.out.println("Put Update Request UUID!: " + adId);
        try {
            adBoardService.updateAd(adId, updateRequest);
        } catch (NoSuchElementException e) {
            throw new AdNotFoundException("Ad not found");
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error updating ad", e);
        }
    }
}
