# 빌드 단계에서 사용할 Gradle + OpenJDK 이미지
FROM gradle:7.2-jdk17 as builder

# 소스 코드를 이미지 내부로 복사
COPY --chown=gradle:gradle ./Back /home/gradle/src
WORKDIR /home/gradle/src

# Gradle을 사용하여 애플리케이션 빌드
RUN gradle build --no-daemon

# 런타임 이미지
FROM openjdk:17-jdk-alpine

# 빌드 단계에서 생성된 JAR 파일을 런타임 이미지로 복사
COPY --from=builder /home/gradle/src/build/libs/*.jar app.jar

# 애플리케이션 실행
ENTRYPOINT ["java","-jar","/app.jar"]