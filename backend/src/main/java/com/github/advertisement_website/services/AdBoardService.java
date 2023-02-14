package com.github.advertisement_website.services;

import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.repositories.AdBoardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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


    public void delete(Long id) {
        adBoardRepository.deleteById(id);
    }


    public Optional<AdBoardEntity> getItemById(Long id) {
        return adBoardRepository.findById(id);
    }
}