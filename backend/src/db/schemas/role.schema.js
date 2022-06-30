import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    _id: Number,
    roleName: String
});

const Role = mongoose.model('Role', roleSchema);

export default Role;