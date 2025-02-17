import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        surname: {
            type: String,
            required: true,
        },

        month: {
            type: String,
            required: true,
        },

        day: {
            type: String,
            required: true,
        },

        year: {
            type: String,
            required: true,
        },

        age: {
            type: String,
            required: true,
        },
       
        job: {
            type: String,
            required: true,
        },
       
        gender: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        phonenumber: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: false,
            default: "user",
        },

        resetToken: {

            type: String,
            required: false,

        },

        resetTokenExpiry: {

            type: Date,
            required: false,

        }, 




    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
