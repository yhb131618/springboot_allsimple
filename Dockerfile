FROM gradle:7.2-jdk17 as builder

# 소스 코드를 이미지 내부로 복사
COPY --chown=gradle:gradle ./ /home/gradle/src
WORKDIR /home/gradle/src

# Gradle을 사용하여 WAR 파일 빌드
RUN gradle build --no-daemon

# 톰캣 기반 런타임 이미지
FROM tomcat:9.0-jdk17-openjdk

FROM openjdk:17-jdk-alpine
COPY --from=builder /home/gradle/src/build/libs/*.jar /
ENTRYPOINT ["java","-jar","/myapp.jar"]
