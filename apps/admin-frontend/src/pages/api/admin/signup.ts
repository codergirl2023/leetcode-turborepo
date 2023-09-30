// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Admins } from 'db/src';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { connectToDB } from 'db/src';
import { Data, IAdmin, IUser } from 'types/src'

const SECRET = process.env.SECRET;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (!SECRET) {
        return res.status(500).json({ "message": "Secret key is missing" });
    }
     connectToDB();
    try {
        const username = req.body.username;
        const password = req.body.password;
        const fullName = req.body.fullName;

        const admin = await Admins.find({ username });
        if (admin.length) {
            return res.status(403).send({ 'message': 'Admin username already exists in our database, please try some other username' });
        }

        const token = sign(
            { username, password },
            SECRET,
            {
                expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 // 30 days
            }
        );

        const serialised = serialize("leetcodeToken", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });
        res.setHeader("Set-Cookie", serialised);
        const adminRecord: IAdmin = { fullName, username, password };

         Admins.insertMany(adminRecord);
        res.status(200).send({ 'message': 'Admin created successfully' });
    } catch (error) {
        
        return res.status(500).send({ 'message': 'Error creating the admin user. Please try again later.' });
    }
}
