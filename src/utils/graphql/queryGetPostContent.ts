import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'

type ContentType = {
  html: string
}

type ImageType = {
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

const query = gql`
  {
    post(where: { slug: "fros-venture" }) {
      id
      title
      description
      createdAt
      content {
        html
      }
      image {
        id
        url
      }
    }
  }
`

export async function getPostContent() {
  const { post }: PostContentType = await graphcms.request(query)
  return post
}
