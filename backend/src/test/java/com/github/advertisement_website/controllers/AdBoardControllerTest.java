package com.github.advertisement_website.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.advertisement_website.controllers.AdBoardController;
import com.github.advertisement_website.dto.AdBoardDto;
import com.github.advertisement_website.entity.AdBoardEntity;
import com.github.advertisement_website.model.response.AdBoardModel;
import com.github.advertisement_website.model.response.DeleteAdBoardResponse;
import com.github.advertisement_website.response.adboard.AdCategory;
import com.github.advertisement_website.services.AdBoardService;
import com.github.advertisement_website.repositories.AdBoardRepository;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

@WebMvcTest(AdBoardController.class)
@AutoConfigureMockMvc
public class AdBoardControllerTest {
    @MockBean
    private AdBoardService adBoardService;
    @MockBean
    private AdBoardRepository adBoardRepository;
    @Mock
    private AdBoardEntity adBoardEntity;
    @Mock
    private AdBoardDto adBoardDto;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllBoardAds() throws Exception {
        AdBoardEntity adBoardEntity1 = new AdBoardEntity();
        adBoardEntity1.setTitle("Ad Title 1");
        adBoardEntity1.setDescription("Ad Description 1");
        adBoardEntity1.setCity("City 1");
        adBoardEntity1.setContactData("Contact Data 1");
        adBoardEntity1.setPrice(BigDecimal.valueOf(10.11));
        adBoardEntity1.setViewCount(BigInteger.valueOf(5L));
        adBoardEntity1.setAdId(UUID.randomUUID());

        AdBoardEntity adBoardEntity2 = new AdBoardEntity();
        adBoardEntity2.setTitle("Ad Title 2");
        adBoardEntity2.setDescription("Ad Description 2");
        adBoardEntity2.setCity("City 2");
        adBoardEntity2.setContactData("Contact Data 2");
        adBoardEntity2.setPrice(BigDecimal.valueOf(20.55));
        adBoardEntity2.setViewCount(BigInteger.valueOf(1L));
        adBoardEntity1.setAdId(UUID.randomUUID());

        List<AdBoardEntity> adBoardEntities = new ArrayList<>();
        adBoardEntities.add(adBoardEntity1);
        adBoardEntities.add(adBoardEntity2);

        List<AdBoardModel> adBoardModels = adBoardEntities.stream()
                .map(adBoard -> new AdBoardDto(adBoard).toModel())
                .toList();

        when(adBoardService.getAllBoardAds()).thenReturn(adBoardEntities);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/ad-board")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        String responseJson = result.getResponse().getContentAsString();
        List<AdBoardModel> responseModels = objectMapper.readValue(responseJson, new TypeReference<List<AdBoardModel>>() {
        });

        assertThat(responseModels.size()).isEqualTo(2);

    }

    @Test
    public void getAllBoardAds_ReturnsListOfAdBoardModels() throws Exception {
        List<AdBoardEntity> adBoardEntities = new ArrayList<>();
        adBoardEntities.add(new AdBoardEntity());
        adBoardEntities.add(new AdBoardEntity());
        Mockito.when(adBoardService.getAllBoardAds()).thenReturn(adBoardEntities);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/ad-board"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
    }

    @Test
    public void addBoardAd_CallsAdBoardService() throws Exception {
        AdBoardEntity adBoardEntity = new AdBoardEntity();
        adBoardEntity.setTitle("Test Ad");
        adBoardEntity.setDescription("Test description");
        adBoardEntity.setPrice(BigDecimal.valueOf(10.11));
        adBoardEntity.setCity("Test city");
        adBoardEntity.setCategory(AdCategory.ELECTRONICS);
        adBoardEntity.setContactData("Test contact data");
        adBoardEntity.setAdId(UUID.randomUUID());

        String json = new ObjectMapper().writeValueAsString(adBoardEntity);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/ad-board")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk());

        Mockito.verify(adBoardService, Mockito.times(1)).addAd(adBoardEntity);
    }

    @Test
    public void deleteBoardAdId_CallsAdBoardService() throws Exception {
        UUID adId = UUID.randomUUID();

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/ad-board/{adId}", adId))
                .andExpect(MockMvcResultMatchers.status().isOk());

        Mockito.verify(adBoardService, Mockito.times(1)).deleteByAdId(adId);
    }


}