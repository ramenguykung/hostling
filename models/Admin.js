import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        

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
            default: "Admin",
        },

       



    },
    { timestamps: true }
);

const   Admin = mongoose.models.User || mongoose.model("Admin", userSchema);
export default Admin;
