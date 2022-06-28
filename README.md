# TLS1on1

Demo of TLS1on1, backend and frontend both use JS/TS.

## FrontEnd

Access from `/`.

SPA, includes:
- login/signup
- main page
  - top bar
    - chat page
    - my page
    - favoriate
  - carousel menu
  - general information (list of hyper link)
- chat page
  - left chat history bar
  - chat box
    - input box
    - history

### Tech Stack

- Framework: [React.js](https://zh-hans.reactjs.org/docs/getting-started.html)
- UI library: [Material UI](https://github.com/mui/material-ui)

## BackEnd

Access from `/api`.

- `/api/login/`
- `/api/signup/`

### DB schemas

- Student
- Teacher

### Tech Stack

- JavaScript -> Change to TypeScript in the future
- Web framework: [Express](https://expressjs.com/en/starter/installing.html)
- DB
  - Dcoument DB (for future migration to DynamoDB): [MongoDB](https://www.mongodb.com/docs/)
  - ORM: [mongoose](https://mongoosejs.com/)

## How to use?

Use shell script to start.