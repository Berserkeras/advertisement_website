package com.github.advertisement_website.dto;



import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.model.response.AdBoardModel;

import java.io.Serializable;

public class AdBoardDto implements Serializable {
    private AdBoardEntity adBoardEntity;

    public AdBoardDto(AdBoardEntity adBoardEntity) {
        this.adBoardEntity = adBoardEntity;
    }

    public AdBoardModel toModel() {
        AdBoardModel adBoardModel = new AdBoardModel();
        adBoardModel.setId(String.valueOf(adBoardModel.getId()));
        adBoardModel.setTitle(adBoardModel.getTitle());
        adBoardModel.setDescription(adBoardModel.getDescription());
        adBoardModel.setCity(adBoardModel.getCity());
        adBoardModel.setContactData(adBoardModel.getContactData());
        adBoardModel.setPrice(adBoardModel.getPrice());
        adBoardModel.setViewCount(adBoardModel.getViewCount());
        return adBoardModel;
    }

}