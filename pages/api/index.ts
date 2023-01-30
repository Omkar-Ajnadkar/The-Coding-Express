import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data: Data = { message: 'Hello World!' }
  res.status(200).json(data)
}

export default handler
