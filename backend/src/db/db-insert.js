import fs from 'fs/promises';
import bcrypt from 'bcrypt';

import Role from './schemas/role.schema.js';
import Target from './schemas/target.schema.js';
import User from './schemas/user.schema.js';

const fileNames = {
    roles: "./src/db/documents-examples/roles-define.json",
    targets: "./src/db/documents-examples/targets-define.json",
    userExample: "./src/db/documents-examples/user-example.json"
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

async function initializeDB(testMode) {
    await insertDocuments(fileNames.targets, Target);
    await insertDocuments(fileNames.roles, Role);
    if (testMode) {
        await insertDocuments(fileNames.userExample, User); 
    }
}

export {
    initializeDB
};