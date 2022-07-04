import bcrypt from 'bcrypt';

import User from '../db/schemas/user.schema.js';
import { generateAccessToken } from '../utils/general-utils.js';

const salt = bcrypt.genSaltSync(10);

function generateRandomUserName() {
    // TODO: random generate funny string
    return "HelloWorld";
}

function createUser(req, res) {

    User.create({
        _id: req.body.email,
        userName: generateRandomUserName(),
        passworHash: bcrypt.hashSync(req.body.password, salt),
    }).then(
        user => res.status(201).send({ user: user, message: "Success: Create user!" }),
        err => res.status(500).send({ message: "Error: " + err }) 
    );
}

function loginUser(req, res) {
  User.findById(req.body.username, 'passwordHash role').exec()
    .then(
      (user) => {
        if (!user) 
          res.status(400)
            .send({ message: `Error: No such user ${req.body.username}!` });
        else
          bcrypt.compare(req.body.password, user.passwordHash)
            .then((result) => {
              if (result) {
                const token = generateAccessToken(user._id, user.role);

                res.status(201)
                  .send({ message: "Success: Login!", token: token });
              } else 
                res.status(401)
                  .send({ message: "Fail: Incorrect password!" });
            });
        },
        (err) => res.status(500)
          .send({ message: "Error: " + err })
      );
}

function getUser(req, res) {

    User.findById(req.params.username).exec()
        .then(
            (user) => {
                if (!user) res.status(400).send({ message: "Error: No such user!" });
                else res.status(201).send({ user: user, message: "Success: Retrieve user!" });
            }, 
            (err) => res.status(500).send({ message: "Error: " + err })
        );
}

function updateUserBasicInformation(req, res) {

    User.findByIdAndUpdate(req.params.username, {
        userName: req.body.userName,
        sexual: req.body.sexual,
        target: req.body.target
    }, { new: true }).exec()
        .then(
            (user) => {
            if (!user)
                res.status(400).send({ message: "Error: No such user!" });
            else
                res.status(201).send({ user: user, message: "Success: Update basic information!" });
            },
            (err) => res.status(500).send({ message: "Error: " + err })
        );
}

function updateUserEducationRecord(req, res) {

    User.findById(req.params.username, 'educations').exec()
        .then(
            (record) => {
                if (!record) res.status(400).send({ message: "Error: No such user!" });
                else {
                    // find eduction and update
                    record.educations = record.educations.map(
                        education => {
                            if (education._id == req.params.id) return req.body;
                            else return education;
                        }
                    );

                    // update
                    User.findByIdAndUpdate(record._id, {
                        educations: record.educations
                    }, {new: true}).exec()
                        .then(
                            (user) => res.status(201).send("Success: Update" + user),
                            (err) => res.status(500).send({ message: "Error: Update: " + err })
                        );
                }
            },
            (err) => res.status(500).send({ message: "Error: Retrive information: " + err })
        );
}

function addUserEducationRecord(req, res)  {

    User.findById(req.params.username, 'educations').exec()
        .then(
            (record) => {
                if (!record) res.status(400).send({ message: "Error: No such user!" });
                else {
                    // add
                    record.educations.push(req.body);
                    
                    // update
                    User.findByIdAndUpdate(record._id, {
                        educations: record.educations
                    }, { new: true }).exec()
                        .then(
                            (user) => res.status(201).send({ user: user, message: "Success: Add education record!" }),
                            (err) => res.status(500).send({ message: "Error: Update: " + err })
                        );
                }
            },
            (err) => res.status(500).send({ message: "Error: Retrive information: " + err })
        );
}

function deleteUserEducationRecord() {

}

function updateUserExperienceRecord() {

}

function addUserExperienceRecord() {

}

function deleteUserExperienceRecord() {

}

export {
    getUser,
    loginUser,
    createUser,
    // education relateted
    updateUserBasicInformation,
    addUserEducationRecord,
    updateUserEducationRecord,
    deleteUserEducationRecord,
    // experience related
    updateUserExperienceRecord,
    addUserExperienceRecord,
    deleteUserExperienceRecord
};