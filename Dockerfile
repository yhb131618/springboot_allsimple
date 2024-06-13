# 빌드 단계에서 사용할 Gradle + OpenJDK 이미지
FROM gradle:7.2-jdk17 as builder

# 소스 코드를 이미지 내부로 복사
COPY --chown=gradle:gradle ./Back /home/gradle/src
WORKDIR /home/gradle/src

# Gradle을 사용하여 WAR 파일 빌드
RUN gradle build --no-daemon

# 톰캣 기반 런타임 이미지
FROM tomcat:9.0-jdk17-openjdk

# Tomcat 서버에서 기본 웹 애플리케이션 삭제
RUN rm -rf /usr/local/tomcat/webapps/*

# 빌드 단계에서 생성된 WAR 파일을 Tomcat 웹 애플리케이션 디렉토리로 복사
COPY --from=builder /home/gradle/src/build/libs/*.war /usr/local/tomcat/webapps/ROOT.war

# 톰캣 실행
CMD ["catalina.sh", "run"]
