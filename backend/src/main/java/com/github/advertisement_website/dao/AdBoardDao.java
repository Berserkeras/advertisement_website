package com.github.advertisement_website.dao;

import com.github.advertisement_website.entity.AdBoardEntity;

import java.util.Optional;
import java.util.UUID;

public interface AdBoardDao {

    Optional<AdBoardEntity> selectAdByAdId(UUID adId);
    void updateAdBoardByAdId(AdBoardEntity update);
}
