import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_END === 'production'
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
