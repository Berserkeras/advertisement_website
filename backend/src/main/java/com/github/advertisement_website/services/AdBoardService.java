package com.github.advertisement_website.services;

import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.exception.AdNotFoundException;
import com.github.advertisement_website.exception.BadRequestException;
import com.github.advertisement_website.model.AdBoardModel;
import com.github.advertisement_website.repositories.AdBoardRepository;
import com.github.advertisement_website.response.AdBoardUpdateRequest;
import com.github.advertisement_website.exception.ContactDataAlreadyExistsException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.List;
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
            throw new AdNotFoundException("Ad with id " + adId + " does not exist for deletion");
        }
        adBoardRepository.deleteAdBoardEntityByAdId(adId);
    }

    public AdBoardModel getItemByAdId(UUID adId) {
        AdBoardEntity adBoardEntity = adBoardRepository.getAdBoardEntityByAdId(adId)
                .orElseThrow(() -> new AdNotFoundException("Ad with id " + adId + " not found for getItemByAdId"));
        return new AdBoardDto(adBoardEntity).toModel();
    }

    @Transactional
    public void updateAd(UUID adId, AdBoardUpdateRequest updateRequest) {
        AdBoardEntity adBoardEntity = adBoardRepository.getAdBoardEntityByAdId(adId)
                .orElseThrow(() -> new AdNotFoundException("Ad with id " + adId + " not found"));

        try {
            String title = updateRequest.title();
            if (StringUtils.hasText(title) && !title.equals(adBoardEntity.getTitle())) {
                System.out.println("pass");
                adBoardEntity.setTitle(title);
            }
            BigDecimal price = updateRequest.price();
            System.out.println("price: " + price);
            if (price != null && !price.equals(adBoardEntity.getPrice())) {
                adBoardEntity.setPrice(price);
            }
            String contactData = updateRequest.contact_data();
            if (StringUtils.hasText(contactData) && !contactData
                    .equals(adBoardEntity.getContactData())) {
                if (adBoardRepository.existsByContactData(contactData)) {
                    throw new ContactDataAlreadyExistsException("contact data already taken");
                }
                adBoardEntity.setContactData(contactData);
            }
            String city = updateRequest.city();
            if (StringUtils.hasText(city) && !city.equals(adBoardEntity.getCity())) {
                adBoardEntity.setCity(city);
            }

            adBoardRepository.save(adBoardEntity);

        } catch (ContactDataAlreadyExistsException ex) {
            throw new RuntimeException("Contact data already exists: " + ex.getMessage(), ex);
        } catch (Exception ex) {
            throw new RuntimeException("Error updating ad: " + ex.getMessage(), ex);
        }
    }

}