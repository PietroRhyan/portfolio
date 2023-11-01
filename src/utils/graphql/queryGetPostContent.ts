import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'

type ContentType = {
  raw: {
    children: [
      {
        type: string
        children: [
          {
            text: string
          },
        ]
      },
    ]
  }
}

export type ImageType = {
  id: string
  url: string
}

type PostContentType = {
  post: {
    id: string
    title: string
    description: string
    createdAt: string
    content: ContentType[]
    image: ImageType
  }
}

export async function getPostContent(slug: string) {
  const query = gql`
    {
      post(where: { slug: "${slug}" }) {
        id
        title
        description
        createdAt
        content {
          raw
        }
        image {
          id
          url
        }
      }
    }
  `

  const { post }: PostContentType = await graphcms.request(query)
  return post
}
