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

        gender: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        postalcode: {
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
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
