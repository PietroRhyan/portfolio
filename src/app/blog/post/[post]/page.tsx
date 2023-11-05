import { getAllSlugs } from '@/utils/graphql/queryGetAllSlugs'
import { getPostContent } from '@/utils/graphql/queryGetPostContent'
import { format } from 'date-fns'
import Image from 'next/image'

type PostProps = {
  params: {
    post: string
  }
}

export default async function Post({ params }: PostProps) {
  const post = await getProjectPostProps(params.post)
  const date = new Date(post.createdAt)

  const formatedDate = format(date, 'MMM dd, yyyy')

  return (
    <>
      <div className="w-full h-[400px] lg:h-[500px] relative">
        <div className="w-full h-full -top-[88px] absolute -z-10 bg-gradient-to-b from-black to-[#232323]">
          <div className="text-center absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-poppins font-bold text-5xl">{post.title}</h1>
            <p className="text-bold text-sm custom-sm:text-base lg:text-lg">
              {post.description}
            </p>
          </div>
          <p className="text-sm absolute bottom-6 left-1/2 -translate-x-1/2 sm:text-base font-semibold text-white text-center">
            {formatedDate}
          </p>
        </div>
      </div>
      <main className="max-w-5xl mb-20 mx-auto px-4 sm:px-8">
        {post.content.map((content) =>
          content.raw.children.map((subcontent) =>
            subcontent.type === 'heading-two' ? (
              <h2
                className="text-2xl sm:text-4xl font-bold dark:text-white mb-4 mt-8"
                key={subcontent.children[0].text}
              >
                {subcontent.children[0].text}
              </h2>
            ) : subcontent.type === 'paragraph' ? (
              <p
                className="text-sm sm:text-base font-medium mb-4"
                key={subcontent.children[0].text.length}
              >
                {subcontent.children[0].text}
              </p>
            ) : subcontent.type === 'image' ? (
              <div className="max-w-[756px] p-2 h-[200px] md:h-[360px] mx-auto flex items-center justify-center rounded-xl bg-lightgray dark:bg-dark-gray">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden object-cente">
                  <Image
                    src={subcontent.src}
                    alt={subcontent.title}
                    fill
                    sizes="(max-width: 768px) 70vw, (max-width: 1000px) 100vw"
                  />
                </div>
              </div>
            ) : null,
          ),
        )}
      </main>
    </>
  )
}

export const dynamicParams = false

export const generateStaticParams = async () => {
  const slugs = await getAllSlugs()
  const paths = slugs.map((slug) => ({
    post: slug.slug,
  }))

  return paths
}

const getProjectPostProps = async (params: string) => {
  const content = await getPostContent(params)
  return content
}
