// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Users } from 'db/src';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { connectToDB } from 'db/src';
import { Data } from 'types/src'

const SECRET = process.env.SECRET;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    
    if (!SECRET) {
        return res.status(500).json({ "message": "Secret key is missing" });
    }
     connectToDB();
    const { username, password } = req.headers;
    const user = await Users.find({ username, password });
    if (!user.length) {
        return res.status(403).send({ 'message': 'Email or Password is incorrect. Please try with correct email/password' });
    } else {
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
        res.status(200).json({ message: 'User logged in successfully' });
    }
}
