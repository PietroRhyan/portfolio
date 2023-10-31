import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'

type IconType = {
  id: string
  url: string
}

export type ProjectPostType = {
  id: string
  slug: string
  title: string
  icon: IconType
  description: string
  createdAt: string
}

export type PostsType = {
  posts: ProjectPostType[]
}

const query = gql`
  {
    posts(where: { projectPost: true }) {
      createdAt
      description
      id
      slug
      title
      icon {
        id
        url
      }
    }
  }
`

export async function getAllProjectPosts() {
  const { posts }: PostsType = await graphcms.request(query)
  return posts
}
