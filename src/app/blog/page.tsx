import { ProjectPost } from '@/components/ProjectPost'
import frosVentureLogo from '../../../public/projects-images/fros-logo.svg'
import recycleItLogo from '../../../public/projects-images/recycleit-logo.svg'
import { Post } from '@/components/Post'

export default function Blog() {
  return (
    <main className="max-w-5xl mt-20 pt-10 mb-20 mx-auto px-4 sm:px-8">
      <div className="mb-9">
        <h2 className="text-poppins font-bold leading-tight text-3xl custom-lgp:text-[40px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#A8F368] via-[#D17B63] to-[#F9035E]">
          How I create, how I think.
        </h2>
        <h4 className="text-xs sm:text-sm font-semibold">
          Here I post how I created my projects, my difficulties, why I choose
          that tech or process and more, such as what I’ am studying.
        </h4>
      </div>

      <section className="mb-8">
        <h4 className="text-xs sm:text-sm font-medium text-text-lightgray dark:text-text-gray mb-4">
          Projects explanations:
        </h4>

        <div className="grid grid-cols-1 custom-sm:grid-cols-2 md:grid-cols-3 lgp:grid-cols-4 gap-5">
          <ProjectPost
            title="Fros Venture"
            description="Process and difficulties of creating a collaborative side-hustle."
            logo={frosVentureLogo}
            postURL="#"
            readTime="5 min read"
          />
          <ProjectPost
            title="Recycle.it"
            description="Challenges of building this project."
            logo={recycleItLogo}
            postURL="#"
            readTime="7 min read"
          />
        </div>
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
