import { type Profile } from '../../typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const query = groq`
  *[_type == "profile"][0]
`

interface Data {
  profile: Profile
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const profile: Profile = await sanityClient.fetch(query)
  res.status(200).json({ profile })
}

export default handler
