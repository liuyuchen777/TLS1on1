# Backend - profile service

## Local

Need to have MongoDB instance run locally:

```bash
# initial
npm i

# copy env file
cp .env.example .env

# start MongoDB docker
docker compose -f docker-compose-dev.yaml up -d

# run application
npm run start
```

## Docker

```bash
docker build . -t tls1on1-back

docker compose up
```
