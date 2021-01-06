package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MediaService {

    @Autowired
    public MediaRepository mediaRepository;

}
