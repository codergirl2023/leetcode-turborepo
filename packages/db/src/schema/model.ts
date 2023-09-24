import { IUser, ISubmission, IProblemDB } from "types/src";
import mongoose from "mongoose";
import { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    }
});

const SubmissionsSchema = new mongoose.Schema({
    language: {
        type: String
    },
    code: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    problemId: {
        type: Schema.Types.ObjectId, ref: 'Problems'
    }
});
const ProblemsSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    examples: {
        type: String,
        get: function (data: string) {
            try {
                return JSON.parse(data);
            } catch (error) {
                return data;
            }
        },
        set: function (data: JSON) {
            return JSON.stringify(data);
        }
    },
    acceptance: {
        type: String
    },
    difficulty: {
        type: String
    }
});
const AdminSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    }
});

export const Problems = mongoose.models.Problems<IProblemDB> || mongoose.model<IProblemDB>("Problems", ProblemsSchema);

export const Submissions = mongoose.models.Submissions<ISubmission> || mongoose.model("Submissions", SubmissionsSchema);

export const Users = mongoose.models.User<IUser> || mongoose.model<IUser>("User", UserSchema);