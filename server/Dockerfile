FROM alpine:latest

ARG PB_VERSION=0.22.20
ARG PB_DOWNLOAD_URL=https://github.com/pocketbase/pocketbase/releases/download

RUN apk add --no-cache unzip ca-certificates openssh

ADD ${PB_DOWNLOAD_URL}/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY ./pb/pb_hooks /pb/pb_hooks
COPY ./pb/pb_migrations /pb/pb_migrations

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
