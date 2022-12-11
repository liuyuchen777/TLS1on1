# Backend

## Local

```bash
# start MongoDB container
docker compose -f docker-compose-dev.yaml up -d
```

## Docker

```bash
# build docker image
docker build . -t tls1on1-back

# run docker
docker compose up
```
