package com.github.advertisement_website.services;

import com.github.advertisement_website.entity.AdBoardEntity;
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

    @Transactional
    public void addAd(AdBoardEntity adBoardEntity) {
        adBoardRepository.save(adBoardEntity);
    }


    public void deleteByAdId(UUID adId) {
        adBoardRepository.deleteByAdId(adId);
    }


    public Optional<AdBoardEntity> getItemById(Long id) {
        return adBoardRepository.findById(id);
    }
}
