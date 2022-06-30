import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    fromId: String,
    toId: String,
    sendTimestamp: Date,
    receiveTimestamp: Date,
    attachment: [String],
    message: String
});

const Message = mongoose.model('Role', messageSchema);

export default Message;