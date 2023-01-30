import { type Project } from '../../typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`

interface Data {
  projects: Project[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const projects: Project[] = await sanityClient.fetch(query)
  res.status(200).json({ projects })
}

export default handler
