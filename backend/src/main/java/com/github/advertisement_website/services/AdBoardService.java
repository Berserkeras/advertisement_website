package com.github.advertisement_website.services;

import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.exception.AdNotFoundException;
import com.github.advertisement_website.exception.BadRequestException;
import com.github.advertisement_website.repositories.AdBoardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AdBoardService {

    private final AdBoardRepository adBoardRepository;

    public AdBoardService(AdBoardRepository adRepository) {
        this.adBoardRepository = adRepository;
    }

    public List<AdBoardEntity> getAllBoardAds() {
        return adBoardRepository.findAll();
    }

    public void addAd(AdBoardEntity adBoardEntity) {
        Boolean existsAdId = adBoardRepository
                .existsByAdId(adBoardEntity.getAdId());
        if (existsAdId) {
            throw new BadRequestException(
                    "adId " + adBoardEntity.getAdId() + " already created");
        }
        adBoardRepository.save(adBoardEntity);
    }


    @Transactional
    public void deleteByAdId(UUID adId) {
        if(!adBoardRepository.existsByAdId(adId)) {
            throw new AdNotFoundException(
                    "Ad with id " + adId + " does not exists, result:" + adBoardRepository.existsByAdId(adId));
        }
        adBoardRepository.deleteAdBoardEntityByAdId(adId);
    }


    public Optional<AdBoardEntity> getItemById(Long id) {
        return adBoardRepository.findById(id);
    }
}
