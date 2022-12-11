# Frontend

## Local

```bash
npm i
# or
npm install
```

In developer mode

```bash
npm run start
```

## Docker

```bash
# build docker image
docker build . -t tls1on1-front

# run docker
docker run -p 3000:3000 -d tls1on1-front   
```