package com.github.advertisement_website.services;

import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.exception.AdNotFoundException;
import com.github.advertisement_website.exception.BadRequestException;
import com.github.advertisement_website.model.AdBoardModel;
import com.github.advertisement_website.repositories.AdBoardRepository;
import com.github.advertisement_website.response.AdBoardUpdateRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AdBoardService {

    private final AdBoardRepository adBoardRepository;

    public AdBoardService(AdBoardRepository adBoardRepository) {
        this.adBoardRepository = adBoardRepository;
    }

    public List<AdBoardEntity> getAllBoardAds() {
        return adBoardRepository.findAll();
    }

    public void addAd(AdBoardEntity adBoardEntity) {
        if (adBoardRepository.existsByAdId(adBoardEntity.getAdId())) {
            throw new BadRequestException(
                    "adId " + adBoardEntity.getAdId() + " already created");
        }
        adBoardRepository.save(adBoardEntity);
    }

    public void deleteByAdId(UUID adId) {
        if (!adBoardRepository.existsByAdId(adId)) {
            throw new AdNotFoundException(
                    "Ad with id " + adId + " does not exist");
        }
        adBoardRepository.deleteAdBoardEntityByAdId(adId);
    }

    public AdBoardModel getItemByAdId(UUID adId) {
        Optional<AdBoardEntity> adBoardEntityOptional = adBoardRepository.getAdBoardEntityByAdId(adId);
        AdBoardEntity adBoardEntity = adBoardEntityOptional
                .orElseThrow(() -> new AdNotFoundException("Ad with id " + adId + " not found"));
        return new AdBoardDto(adBoardEntity).toModel();
    }

    @Transactional
    public void updateAd(UUID adId, AdBoardUpdateRequest updateRequest) throws Exception {
        AdBoardEntity adBoardEntity = adBoardRepository.getAdBoardEntityByAdId(adId)
                .orElseThrow(() -> new AdNotFoundException("Ad with id " + adId + " not found"));

        if (updateRequest.title() != null && !updateRequest.title().equals(adBoardEntity.getTitle())) {
            adBoardEntity.setTitle(updateRequest.title());
        }

        if (updateRequest.price() != null && !updateRequest.price().equals(adBoardEntity.getPrice())) {
            adBoardEntity.setPrice(updateRequest.price());
        }

        if (updateRequest.contact_data() != null && !updateRequest.contact_data()
                .equals(adBoardEntity.getContactData())) {
            if (adBoardRepository.existsByContactData(updateRequest.contact_data())) {
                throw new Exception(
                        "contact data already taken"
                );
            }
            adBoardEntity.setContactData(updateRequest.contact_data());
        }

        if (updateRequest.city() != null && !updateRequest.city().equals(adBoardEntity.getCity())) {
            adBoardEntity.setCity(updateRequest.city());
        }

        adBoardRepository.save(adBoardEntity);
    }

}