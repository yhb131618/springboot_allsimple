package com.bit.allsimple.dto;

import java.util.List;

import org.springframework.data.domain.Page;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDTO<T> {
    private T item;
    private List<T> items;
    private Page<T> pageItems;
    private int statusCode;
    private int errorCode;
    private String errorMessage;
}
