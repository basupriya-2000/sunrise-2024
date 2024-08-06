import { completeTask } from '@/modules/taskManager';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {title } = req.body
    // console.log("completetast api title: " + title)
    res.status(200).json(completeTask(title));
}
