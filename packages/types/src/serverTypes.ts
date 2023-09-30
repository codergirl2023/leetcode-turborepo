import mongoose from "mongoose";

export interface JwtPayload {
    username?: string;
}

export type Data = {
    message?: string;
    username?: JwtPayload | string
}

export interface IUser{
    username:string;
    password:string;
    fullName:string;
}

export interface IAdmin{
    username:string;
    password:string;
    fullName:string;
}

export interface IProblemDB{
    title:string;
    description:string;
    examples:string;
    acceptance:string;
    difficulty:string;
}

export interface ISubmission{
    language:string;
    code:string;
    problemId?:mongoose.Schema.Types.ObjectId;
    userId?:mongoose.Schema.Types.ObjectId;
}