FROM apache/tika:latest

ENV JAVA_OPTS="-Xmx512m"
EXPOSE 9998

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl --fail http://0.0.0.0:9998 || exit 1