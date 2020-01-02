const mongoose = require("mongoose")

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
})

const ContactUsModel = mongoose.model("contactus", ContactUsSchema);
module.exports = ContactUsModel;