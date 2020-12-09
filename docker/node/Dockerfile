FROM node:14.15.1-stretch-slim

ENV PATH="/opt/sample-integration/bin:${PATH}"

RUN apt-get update && \
    apt-get install -yq openssh-client git && \
    rm -rf /var/lib/apt/lists/*

COPY ./entrypoint.sh "/opt/sample-integration/entrypoint.sh"
COPY ./bin "/opt/sample-integration/bin"
COPY ./shared "/opt/sample-integration/shared"

ENTRYPOINT ["/opt/sample-integration/entrypoint.sh"]
