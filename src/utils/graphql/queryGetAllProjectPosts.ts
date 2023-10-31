import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'

type ProjectPostType = {
  id: string
  slug: string
  title: string
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
    }
  }
`

export async function getAllProjectPosts() {
  const { posts }: PostsType = await graphcms.request(query)
  return posts
}
