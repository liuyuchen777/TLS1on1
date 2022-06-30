# TLS1on1

Demo of TLS1on1, backend and frontend both use JS/TS, localhost version.

## FrontEnd

Access from `/`.

SPA, includes:
- `/login`
- `/signup`
- `/profile`
- `/home`
  - top bar
    - chat page
    - my page
    - favoriate
  - main content (show teacher information)
  - general information (list of hyper link)
- `/chat/:chatId`
  - top bar
  - left chat history bar
  - chat box
    - input box
    - history
- `/teacher/:id`
  - detail information
  - chat button

### Tech Stack

- Framework: [React.js](https://zh-hans.reactjs.org/docs/getting-started.html)
- UI library: [Material UI](https://github.com/mui/material-ui)
  - Page templates: [Material UI templates](https://github.com/mui/material-ui/tree/v5.8.6/docs/data/material/getting-started/templates)

## BackEnd

Access from `/api`.

no-protected
- `/api/login/`
- `/api/signup/`
- `/api/teachers`: general information (show on top bar)

protected
- `/api/teacher/:id`: detail teacer information
- `/api/profile`

### Tech Stack

- JavaScript -> Change to TypeScript in the future
- Web framework: [Express](https://expressjs.com/en/starter/installing.html)
- Authentication: [express-jwt](https://www.npmjs.com/package/express-jwt)

## DB schemas

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

- Message
  - How to store message?

### Tech Stack

- Dcoument DB (for future migration to DynamoDB): [MongoDB](https://www.mongodb.com/docs/)
- ORM: [mongoose](https://mongoosejs.com/)

## How to use?

### backend

To run backend, you need have MongoDB Altas or MongoDB local community server (recommended) to hold data persistence layer.

Initialize with npm
```shell
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

Run
```
npm run dev
```