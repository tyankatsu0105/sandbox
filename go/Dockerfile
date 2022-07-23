###############################
# Builder
###############################
FROM golang:1.16 as builder
# -----------------------
# ARG
ARG WORKDIR
ARG APP_NAME
# -----------------------
WORKDIR $WORKDIR
COPY main.go .
RUN CGO_ENABLED=0 go build -o $APP_NAME

###############################
# Runtime
###############################
FROM alpine:latest
# -----------------------
# ARG
ARG WORKDIR
# -----------------------
# -----------------------
# ENV
ENV OUTPUT_FILE_NAME $APP_NAME
# -----------------------

RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder $WORKDIR$APP_NAME .
EXPOSE 8080

ENTRYPOINT ./$OUTPUT_FILE_NAME