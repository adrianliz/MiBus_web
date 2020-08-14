FROM tomcat:latest
ADD mibus_web.war /usr/local/tomcat/webapps/
EXPOSE 8080
CMD ["catalina.sh", "run"]