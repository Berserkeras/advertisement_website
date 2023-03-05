package com.github.advertisement_website.services;

import com.github.advertisement_website.dao.AdBoardDao;
import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.exception.AdNotFoundException;
import com.github.advertisement_website.exception.BadRequestException;
import com.github.advertisement_website.model.response.AdBoardModel;
import com.github.advertisement_website.repositories.AdBoardRepository;
import com.github.advertisement_website.response.AdBoardUpdateRequest;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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


    public AdBoardModel getItemByAdId(UUID adId) {
        AdBoardEntity adBoardEntity = adBoardRepository.getAdBoardEntityByAdId(adId);
        if (adBoardEntity == null) {
            throw new AdNotFoundException("Ad with id " + adId + " not found");
        }
        return new AdBoardDto(adBoardEntity).toModel();
    }

    public void updateAd(UUID adId,
                               AdBoardUpdateRequest updateRequest) throws Exception {
        // TODO: for JPA use .getReferenceByAdId(adId) as it does does not bring object into memory and instead a reference
        AdBoardEntity adBoardEntity = adBoardRepository.getAdBoardEntityByAdId(adId);
        if (adBoardEntity == null) {
            throw new AdNotFoundException("Ad with id " + adId + " not found");
        }

        boolean changes = false;

        if (updateRequest.title() != null && !updateRequest.title().equals(adBoardEntity.getTitle())) {
            adBoardEntity.setTitle(updateRequest.title());
            changes = true;
        }

        if (updateRequest.price() != null && !updateRequest.price().equals(adBoardEntity.getPrice())) {
            adBoardEntity.setCity(updateRequest.city());
            changes = true;
        }

        if (updateRequest.contact_data() != null && !updateRequest.contact_data().equals(adBoardEntity.getContactData())) {
            if (adBoardRepository.existsByContactData(updateRequest.contact_data())) {
                throw new Exception(
                        "contact data already taken"
                );
            }
            adBoardEntity.setContactData(updateRequest.contact_data());
            changes = true;
        }

        if (updateRequest.city() != null && !updateRequest.city().equals(adBoardEntity.getCity())) {
            changes = false;
        }
        else {
            adBoardEntity.setCity(updateRequest.city());
            changes = true;
        }

        if (!changes) {
            throw new Exception("no data changes found");
        }

        adBoardRepository.updateAd(adId, adBoardEntity.getTitle(), adBoardEntity.getPrice(), adBoardEntity.getContactData());
    }

}
