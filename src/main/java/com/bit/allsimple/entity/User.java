package com.bit.allsimple.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.bit.allsimple.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "T_USER")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userIdx;
    @Column(unique = true)
    private String userId;
    private String userPw;
    private String userName;
    private String userTel;
    private LocalDateTime userRegdate;
    private String role;
    private boolean isActive;
    private LocalDateTime lastLoginDate;

    public UserDTO toDTO() {
        return UserDTO.builder()
                .userIdx(this.userIdx)
                .userId(this.userId)
                .userPw(this.userPw)
                .userName(this.userName)
                .userTel(this.userTel)
                .userRegdate(this.userRegdate.toString())
                .role(this.role)
                .isActive(this.isActive)
                .lastLoginDate(this.lastLoginDate.toString())
                .build();
    }
}
