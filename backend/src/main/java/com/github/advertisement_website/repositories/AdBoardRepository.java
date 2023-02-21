package com.github.advertisement_website.repositories;


import com.github.advertisement_website.entity.AdBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository("adBoardRepository")
public interface AdBoardRepository extends JpaRepository<AdBoardEntity, Long> {


    @Transactional
    @Modifying
    @Query("DELETE FROM AdBoardEntity a WHERE a.adId = :adId")
    int deleteAdBoardEntityByAdId(@Param("adId") UUID adId);
    @Transactional
    @Modifying
    @Query("DELETE FROM AdBoardEntity a WHERE a.createTime < :twoWeeksAgo")
    void deleteAdsOlderThan(LocalDateTime twoWeeksAgo);

    @Query("" +
            "SELECT CASE WHEN COUNT(a) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM AdBoardEntity a " +
            "WHERE a.adId = ?1"
    )

    Boolean existsByAdId(UUID adId);

    @Transactional
    AdBoardEntity getAdBoardEntityByAdId(@Param( "adId") UUID adId);

}
