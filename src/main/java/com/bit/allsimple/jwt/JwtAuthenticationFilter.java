package com.bit.allsimple.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.RequiredArgsConstructor;

// Spring Security에 필터로 등록을 해서 인증이 필요한 요청이 올 경우 자동으로 doFilterInternal 메소드가 동작
// JwtTokenProvider의 validationAndGetUsername 메소드를 통해 토큰의 유효성 검사 및 username을 가져와서
// 토큰이 유효하면 username에 해당하는 Member를 securityContext에 등록.
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;
    private final UserDetailsService userDetailsService;

    private String parseBearerToken(HttpServletRequest request) {
        /*
         * request 헤더에 담겨있는 토큰의 형태
         * header: {
         * Authorization: "Bearer 토큰값"
         * }
         */
        String bearerToken = request.getHeader("Authorization");

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            // bearerToken에서 Bearer를 제거한 실제 토큰 값 리턴
            return bearerToken.substring(7);
        }

        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            // 토큰 값이 있으면 토큰 값이 담기고
            // 없으면 null이 담긴다.
            String token = parseBearerToken(request);

            // 토큰 검사 및 securit context 등록
            if (token != null && !token.equalsIgnoreCase("null")) {
                // 토큰의 유효성 검사 및 username 가져오기
                String userId = jwtTokenProvider.validateAndGetUsername(token);

                UserDetails userDetails = userDetailsService.loadUserByUsername(userId);

                // 유효성 검사 완료된 토큰 시큐리티에 인증된 사용자로 등록
                AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());

                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContext securityContext = SecurityContextHolder.getContext();
                securityContext.setAuthentication(authenticationToken);
                SecurityContextHolder.setContext(securityContext);
            }

        } catch (Exception e) {
            System.out.println("set security context error: " + e.getMessage());
        }

        // 필터 체인에 등록
        filterChain.doFilter(request, response);
    }
}