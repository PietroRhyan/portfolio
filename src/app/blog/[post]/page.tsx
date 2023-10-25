type postSlug = string

export async function generateStaticParams() {
  const projectPost: postSlug[] = ['FrosVenture', 'RecycleIt']

  return projectPost.map((slug) => ({
    post: slug,
  }))
}

export default function Post({ params }: { params: { post: string } }) {
  // const { post } = params

  return (
    <>
      <div className="w-full h-[400px] lg:h-[500px] max-w-[1440px] relative">
        <div className="w-full h-full absolute z-10 bg-gradient-to-b from-black to-[#232323]">
          <div className="text-center absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-poppins font-bold text-5xl">Fros Venture</h1>
            <p className="text-bold text-sm custom-sm:text-base lg:text-lg">
              Process and difficulties of creating a collaborative side-hustle.
            </p>
          </div>
          <p className="text-sm absolute bottom-6 left-1/2 -translate-x-1/2 sm:text-base font-semibold text-white text-center">
            Oct 19, 2023
          </p>
        </div>
      </div>
      <main className="max-w-5xl pt-10 mb-20 mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-1 mb-8">
          <h3 className="text-lg sm:text-3xl font-bold dark:text-white">
            Title
          </h3>
          <p className="text-sm sm:text-base font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eveniet dignissimos, sapiente vel sed aliquam. Ea dolorem, sint, nam
            sunt, aperiam nobis sapiente minima voluptatibus sit non magnam
            velit reiciendis!
          </p>
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <h3 className="text-lg sm:text-3xl font-bold dark:text-white">
            Title
          </h3>
          <p className="text-sm sm:text-base font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eveniet dignissimos, sapiente vel sed aliquam. Ea dolorem, sint, nam
            sunt, aperiam nobis sapiente minima voluptatibus sit non magnam
            velit reiciendis!
          </p>
        </div>
      </main>
    </>
  )
}
