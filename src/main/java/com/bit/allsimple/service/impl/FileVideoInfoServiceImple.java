package com.bit.allsimple.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bit.allsimple.entity.FileVideoInfo;
import com.bit.allsimple.repository.FileVideoRepository;
import com.bit.allsimple.service.FileVideoInfoService;

@Service
public class FileVideoInfoServiceImple implements FileVideoInfoService {

    @Autowired
    private FileVideoRepository FileVideoRepository;

    @Override
    public void videoInfoSet(String videoName, String videoTag, String videoChannel, String fileVideoFileName) {
        // 생성자 인자 순서와 타입을 클래스 정의에 맞추어 수정합니다.
        // 예를 들어, 날짜나 좋아요/싫어요 등의 필드가 필요하다면 여기에 추가해야 합니다.
        // 이 예제에서는 단순화를 위해 기본값만 사용합니다.
        try {
            FileVideoInfo fileVideoInfo = new FileVideoInfo(videoName, videoTag, videoChannel, fileVideoFileName);
            FileVideoRepository.save(fileVideoInfo);
        } catch (Exception e) {
            e.printStackTrace();
            // 필요한 경우 여기서 사용자 정의 예외를 던지거나 적절히 처리합니다.
        }
    }
}