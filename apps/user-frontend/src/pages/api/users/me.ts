// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { Users } from 'db/src';
import { Data, JwtPayload } from 'types/src';
import { connectToDB } from 'db/src';

const SECRET = process.env.SECRET;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
     connectToDB();
    if (!SECRET) {
        return res.status(500).json({ "message": "Secret key is missing" });
    }
    const { cookies } = req;
    const token = cookies.leetcodeToken;
    let user;

    if (!token) {
        return res.status(403).json({ message: "cookie token not found" });
    } else {
        user = verify(token, SECRET) as JwtPayload;

        const userFound = await Users.find({ username: user.username });
        if (!userFound.length) {
            res.status(403).json({ message: "User doesn't exist" })
            return
        }
        res.json({
            username: user.username
        })
    }
}
