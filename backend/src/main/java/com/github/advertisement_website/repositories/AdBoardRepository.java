package com.github.advertisement_website.repositories;


import com.github.advertisement_website.entity.AdBoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Repository("adBoardRepository")
public interface AdBoardRepository extends JpaRepository<AdBoardEntity, Long> {


    @Transactional
    @Modifying
    @Query("DELETE FROM AdBoardEntity a WHERE a.adId = :adId")
    void deleteAdBoardEntityByAdId(@Param("adId") UUID adId);
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

    Boolean existsByContactData(String contactData);

    @Transactional
    Optional<AdBoardEntity> getAdBoardEntityByAdId(@Param( "adId") UUID adId);

    @Transactional
    @Modifying
    @Query("update AdBoardEntity a set a.title = :title, a.price = :price, a.contactData = :contact_data where a.adId = :adId")
    void updateAd(@Param("adId") UUID adId,
                  @Param("title") String title,
                  @Param("price") BigDecimal price,
                  @Param("contact_data") String contactData
    );

}
