import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'
import { PostsType } from './queryGetAllProjectPosts'

const query = gql`
  {
    posts(where: { projectPost: false }) {
      createdAt
      description
      id
      slug
      title
    }
  }
`

export async function getAllNormalPosts() {
  const { posts }: PostsType = await graphcms.request(query)
  return posts
}
