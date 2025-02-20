import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const name = req.query.name;
    if (name === undefined) {
      res.status(400).json({ message: 'Please provide a name' });
      return;
    }
    res.status(200).json({ message: 'Hello from Next.js! Your name is: ' + name || '' })
}
