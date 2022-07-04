import fs from 'fs/promises';
import bcrypt from 'bcrypt';

import User from './schemas/user.schema.js';
import Message from './schemas/message.schema.js';

const fileNames = {
  userExample: "./src/db/documents-examples/user-example.json",
  messageExample: "./src/db/documents-examples/user-example.json"
};
const defaultPassword = process.env.default_password;
const salt = bcrypt.genSaltSync(10);

async function insertDocuments(fileName, model) {
  const textData = await fs.readFile(fileName, 'utf-8');
  // console.log(textData);
  const data = JSON.parse(textData);
  // console.log(data[0]);
  data.forEach(async element => {
    if (model == User) {
      // add password
      element.passwordHash = bcrypt.hashSync(defaultPassword, salt);
    }
    const doc = new model(element);
    await doc.save((err) => {
      console.log(`InsertRecord -> Error ${err} in ${doc._id}`);
    });
  });
}

async function initializeDB() {
  await insertDocuments(fileNames.userExample, User); 
  await insertDocuments(fileNames.messageExample, Message); 
}

export {
  initializeDB
};