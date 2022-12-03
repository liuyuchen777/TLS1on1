# Backend

## Local

Initialize with npm
```bash
npm i
# or
npm install
```

Copy and change `.env` file correspondingly

In developer mode, you need first have mongodb install in your local environment and then

```bash
npm run dev
```

## Docker

```bash
# build docker image
docker build . -t tls1on1-back

# run docker
docker compose up
```