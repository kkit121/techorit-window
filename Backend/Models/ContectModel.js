import mongoose from "mongoose";

const contectSchema = new mongoose.Schema({  // ✅ Fixed: Used new mongoose.Schema()
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Contect = mongoose.model("Contect", contectSchema);
