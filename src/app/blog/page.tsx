'use client'

import { ProjectPost } from '@/components/ProjectPost'
import { Post } from '@/components/Post'
import { getAllProjectPosts } from '@/utils/graphql/queryGetAllProjectPosts'
import { useQuery } from '@tanstack/react-query'
import { LuLoader2 } from 'react-icons/lu'

export default function Blog() {
  async function getPosts() {
    const posts = await getAllProjectPosts()
    return posts
  }

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <main className="max-w-5xl mt-10 mb-20 mx-auto px-4 sm:px-8">
      <div className="mb-9">
        <h2 className="text-poppins font-bold leading-tight text-3xl custom-lgp:text-[40px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#A8F368] via-[#D17B63] to-[#F9035E]">
          How I create, how I think.
        </h2>
        <h4 className="text-xs sm:text-sm font-semibold">
          Here I post how I created my projects, my difficulties, why I choose
          that tech or process and more, such as what I&apos; am studying.
        </h4>
      </div>

      <section className="mb-8">
        <h4 className="text-xs sm:text-sm font-medium text-text-lightgray dark:text-text-gray mb-4">
          Projects explanations:
        </h4>

        {isLoading ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            <div className="animate-fast-spin">
              <LuLoader2 size={24} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 custom-sm:grid-cols-2 md:grid-cols-3 lgp:grid-cols-4 gap-5">
            {data?.map((post) => (
              <ProjectPost
                key={post.id}
                title={post.title}
                description={post.description}
                logo={post.icon.url}
                postURL={`/blog/post/${post.slug}`}
                readTime="5 min read"
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h4 className="text-xs sm:text-sm font-medium text-text-lightgray dark:text-text-gray mb-4">
          Other posts:
        </h4>

        <div className="flex flex-col gap-6">
          <Post
            title="I don't know, a post about cats?"
            description="My cats are beautiful"
            createdAt="Oct 19, 2023"
            readTime="2 min read"
            postURL="#"
          />
          <Post
            title="I don't know, a post about cats?"
            description="My cats are beautiful"
            createdAt="Oct 19, 2023"
            readTime="2 min read"
            postURL="#"
          />
          <Post
            title="I don't know, a post about cats?"
            description="My cats are beautiful"
            createdAt="Oct 19, 2023"
            readTime="2 min read"
            postURL="#"
            className="last:border-none"
            isLastPost
          />
        </div>
      </section>
    </main>
  )
}
