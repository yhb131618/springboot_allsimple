package com.bit.allsimple.dto;

import java.time.LocalDateTime;

import com.bit.allsimple.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
public class UserDTO {
    private long userIdx;
    private String userId;
    private String userPw;
    private String userName;
    private String userTel;
    private String userRegdate;
    private String role;
    private String curUserPw;
    private boolean isActive;
    private String lastLoginDate;
    private String token;

    public User toEntity() {
        return User.builder()
                .userIdx(this.userIdx)
                .userId(this.userId)
                .userPw(this.userPw)
                .userName(this.userName)
                .userTel(this.userTel)
                .userRegdate(LocalDateTime.parse(this.userRegdate))
                .role(this.role)
                .isActive(this.isActive)
                .lastLoginDate(LocalDateTime.parse(this.lastLoginDate))
                .build();
    }
}
