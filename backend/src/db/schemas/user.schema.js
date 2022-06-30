import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
}); 

const User = mongoose.model('User', userSchema);

export default User;