package com.bit.allsimple.jwt;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import com.bit.allsimple.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

// JWT TOKEN을 발행하고 받아온 JWT TOKEN이 유효한지 검사해주는 클래스
@Component
public class JwtTokenProvider {
    // JWT TOKEN의 signature 부분이 될 서명 키 선언
    // bitcampdevops4todobootapp502magicecole 을 BASE64 인코딩한 값
    private static final String SECRET_KEY = "Yml0Y2FtcGRldm9wczR0b2RvYm9vdGFwcDUwMm1hZ2ljZWNvbGU=";

    // SECRET_KEY를 KEY 객체로 변환
    SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

    // 사용자 정보를 받아서 JWT TOKEN을 생성하는 메소드
    public String create(User user) {
        // 토큰 만료일 생성
        // 생성된 날짜로부터 하루 뒤를 만료일자로 설정
        Date expireDate = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));

        // JWT Token 생성하여 리턴
        // Jwts 객체를 사용하기 때문에 JWT TOKEN의 헤더에 typ에 jwt로 입력된다.
        JwtBuilder builder = Jwts.builder();
        builder.signWith(key, SignatureAlgorithm.HS256)
                .setSubject(user.getUserId())
                .setIssuer("allsimple app")
                .setIssuedAt(new Date())
                .setExpiration(expireDate);
        String token = builder.compact();
        return token;
    }

    // 받아온 JWT TOKEN이 유효한지를 검사하는 메소드
    // 유효하면 Subject에 담겨있는 username을 리턴한다.
    public String validateAndGetUsername(String token) {
        /*
         * 받아온 토큰 값을 파싱해서 유효성을 검사
         * 토큰에 있는 시그니쳐와 서버에서 가지고있는 시그니쳐 값과 비교
         * 일치하면 Claims 객체를 리턴
         */
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }
}
