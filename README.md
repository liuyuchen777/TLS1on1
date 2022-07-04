# TLS1on1

Demo of TLS1on1.

TLS1on1 is a online skill exchange website. It is a web application of users who can exchange skills and knowledge. User could register as `Teacher`, who provide skills and `Student`, who want to learn skills from others.

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

## DB schemas

Check model on [Swagger](https://app.swaggerhub.com/apis-docs/tls1on1/tls1on1-backend/1.0.0);

- User
```
_id: String,    // email address
userName: String,
sexual: Boolean,
educations: [{
    university: String,
    degree: String,
    major: String,
    startDate: Date,
    endDate: Date   // expect end date
}],
experience: [{
    experienceType: String,
    title: String,
    description: String,
    startDate: Date,
    endDate: Date   // expect end date
}],
role: Number,
target: [Number],
passwordHash: String
```

- Message (In Progress)

### Tech Stack

- Dcoument DB (for future migration to DynamoDB): [MongoDB](https://www.mongodb.com/docs/)
- ODM: [mongoose](https://mongoosejs.com/)

## How to use?

### Script

(In Progress)

### Frontend

To run frontend, you need to have npm installed.

```bash
npm run i
# or
npm run install
```

In developer mode
```bash
npm start
```

### Backend

To run backend, you need have MongoDB Altas or MongoDB local community server (recommended) to hold data persistence layer.

Initialize with npm
```bash
npm i
# or
npm install
```

Create `.env` file
```
# exmaple
PORT=8080
DB_CONNECTION_STRING=mongodb://localhost:27017/tls1on1  # mongodb connection string
DEFAULT_PASSWORD=123456 
JWT_SECRET=my_secret_12345
```

In developer mode
```bash
npm run dev
```