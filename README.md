# TLS1on1

TLS1on1 is a online skill exchange website. It is a web application that users who can exchange skills and knowledge. User could register as `Teacher`, who provide skills and `Student`, who want to learn skills from others.

This application use frontend and backend separation paradigm. The frontend is a web application, and the backend is a RESTful api.

## Frontend

### Tech Stack

- Framework: [React.js](https://zh-hans.reactjs.org/docs/getting-started.html)
- UI library: [Material UI](https://github.com/mui/material-ui)
  - Page templates: [Material UI templates](https://github.com/mui/material-ui/tree/v5.8.6/docs/data/material/getting-started/templates)

## Backend

API is defined in [Swagger](https://app.swaggerhub.com/apis-docs/tls1on1/tls1on1-backend/1.0.0).

### Tech Stack

- JavaScript -> Change to TypeScript in the future
- Web framework: [Express](https://expressjs.com/en/starter/installing.html)
- Authentication: [express-jwt](https://www.npmjs.com/package/express-jwt)

### DB Schema

#### User Schema

#### Message Schema

### Tech Stack

- Key-value DB (Future migration to DynamoDB or BigTable): [MongoDB](https://www.mongodb.com/docs/)
- ODM: [mongoose](https://mongoosejs.com/)

## How to use?

```bash
# check
sh run.sh doctor

# start frontend and backend
sh run.sh
```

## Others
- [22.07.04 Meeting](https://onedrive.live.com/edit.aspx?resid=5F5F3E6BC5D5E03B!201858&ithint=file%2cpptx&authkey=!ANvM2Rc0YIXIqcc)
