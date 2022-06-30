import User from '../db/schemas/user.schema.js';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

function generateRandomUserName() {
    // TODO: random generate funny string
    return "HelloWorld";
}

function createUser(req, res) {
    // console.log(req.body);

    User.create({
        _id: req.body.email,
        userName: generateRandomUserName(),
        passworHash: bcrypt.hashSync(req.body.password, salt),
    }).then(
        user => res.status(201).send(user)
    ).catch(
        err => res.status(401).send(err) 
    );
}

function loginUser(req, res) {

}

function getUser(req, res) {

}

function updateUserBasicInformation(req, res) {

    User.findByIdAndUpdate(req.params.username, {
        userName: req.body.userName,
        sexual: req.body.sexual,
        target: req.body.target
    }, {
        new: true // return updated document
    }).exec()
        .catch(
            err => res.status(401).send("Error: " + err)
        )
        .then((user) => {
            if (!user)
                res.status(401).send("User not found!");
            else
                res.status(201).send("Update Success: " + user);
        });
}

function updateUserEducationRecord(req, res) {

    
}

function addUserEducationRecord(req, res)  {

    User.findById(req.params.username, 'educations')
        .then((record) => {
            record.educations.push({
                university: req.body.university,
                degree: req.body.degree,
                major: req.body.major,
                startDate: req.body.startDate,
                endDate: req.body.endDate
            });

            console.log(record.educations);

            // User.findByIdAndUpdate(req.params.username, )
        });
}

export {
    createUser,
    updateUserBasicInformation,
    addUserEducationRecord
};