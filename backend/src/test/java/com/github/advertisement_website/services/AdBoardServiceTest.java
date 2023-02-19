package com.github.advertisement_website.services;

import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.repositories.AdBoardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.*;

public class AdBoardServiceTest {
    private AdBoardService adBoardService;

    private AdBoardRepository adBoardRepository;

    private AdBoardEntity adBoardEntity;

    @BeforeEach
    void setUp() {
        adBoardRepository = mock(AdBoardRepository.class);
        adBoardService = new AdBoardService(adBoardRepository);
        adBoardEntity = new AdBoardEntity();
        adBoardEntity.setId(1L);
        adBoardEntity.setTitle("Ad Title");
        adBoardEntity.setDescription("Ad Description");
        adBoardEntity.setCity("City");
        adBoardEntity.setContactData("Contact Data");
        adBoardEntity.setPrice(BigDecimal.valueOf(10.11));
        adBoardEntity.setViewCount(BigInteger.valueOf(5L));
        UUID test = UUID.randomUUID();
        adBoardEntity.setAdId(test);
    }

    @Test
    void testGetAllBoardAds() {
        List<AdBoardEntity> adBoardEntities = new ArrayList<>();
        adBoardEntities.add(adBoardEntity);
        when(adBoardRepository.findAll()).thenReturn(adBoardEntities);

        List<AdBoardEntity> result = adBoardService.getAllBoardAds();
        assertThat(result.size()).isEqualTo(1);
        assertThat(result.get(0)).isEqualTo(adBoardEntity);
    }

    @Test
    void testAddAd() {
        adBoardService.addAd(adBoardEntity);
        verify(adBoardRepository, times(1)).save(adBoardEntity);
    }
}
