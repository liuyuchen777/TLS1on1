import mongoose from "mongoose";

const targetSchema = new mongoose.Schema({
    _id: Number,
    targetName: String
});

const Target = mongoose.model('Target', targetSchema);

export default Target;