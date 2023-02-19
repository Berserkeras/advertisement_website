package com.github.advertisement_website.dto;



import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.model.response.AdBoardModel;

import java.io.Serializable;

public class AdBoardDto implements Serializable {

    private final AdBoardEntity adBoardEntity;

    public AdBoardDto(AdBoardEntity adBoardEntity) {
        this.adBoardEntity = adBoardEntity;
    }


    public AdBoardModel toModel() {
        AdBoardModel adBoardModel = new AdBoardModel();
        adBoardModel.setId(String.valueOf(adBoardEntity.getId()));
        adBoardModel.setTitle(adBoardEntity.getTitle());
        adBoardModel.setDescription(adBoardEntity.getDescription());
        adBoardModel.setCity(adBoardEntity.getCity());
        adBoardModel.setContactData(adBoardEntity.getContactData());
        adBoardModel.setPrice(adBoardEntity.getPrice());
        adBoardModel.setViewCount(adBoardEntity.getViewCount());
        adBoardModel.setAdId(adBoardEntity.getAdId());
        return adBoardModel;
    }

}