// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User, Submissions } from 'db/src';
import { connectToDB } from 'db/src';
import { Data } from 'types/src'

connectToDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const userQuery = User.find({ email: req.body.username }).select("_id");
    const user = await userQuery.exec();
    req.body.userId = user[0];
    Submissions.insertMany({
        "code":req.body.code,
        "userId":req.body.userId,
        "problemId":req.body.problemId
    })
    res.status(200).send({ "message": "Submitted successfully!" });
}
