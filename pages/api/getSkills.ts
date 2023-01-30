import { type Skill } from '../../typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const query = groq`
  *[_type == "skill"]
`

interface Data {
  skills: Skill[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const skills: Skill[] = await sanityClient.fetch(query)
  res.status(200).json({ skills })
}

export default handler
