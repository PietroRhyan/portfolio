import { graphcms } from '@/services/api/'
import { gql } from 'graphql-request'

type PostSlugType = {
  slug: string
  id: string
}

type PostsType = {
  posts: PostSlugType[]
}

const query = gql`
  {
    posts {
      slug
      id
    }
  }
`

export async function getAllSlugs() {
  const { posts }: PostsType = await graphcms.request(query)
  return posts
}
