import { performRequest } from '@/utils/datocms';
import LatestPostsLayout from '@/infrastructure/components/LatestPostsLayout';

export type BlogIndexResponse = {
  allArticles: {
    id: string
    slug: string
    subtitle: string
    tag: string
    title: string
    publishDate: string
    author: string
    image: {
      alt: string
      url: string
    }
  }[]
}

export default async function NotFoundPage() {
  const { data: { allArticles } } = await performRequest<BlogIndexResponse>({
    query: `
   {
    allArticles(first: "3") {
      id
      slug
      subtitle
      tag
      title
      publishDate
      author
      image {
        alt
        url
      }
    }
  }
  `,
  })

  return (
    <LatestPostsLayout allArticles={allArticles}>
      <div className="flex flex-col justify-center text-center gap-8 max-w-3xl mx-auto min-h-[50vh]">
        <div className="flex flex-col justify-center text-center gap-4">
          <p className="text-purple-600 text-base font-semibold">
            404 error
          </p>
          <h1 className="text-5xl font-semibold">We lost this page</h1>
        </div>
        <h2 className="text-xl text-gray-600">
          We searched high and low, but couldn’t find what you’re looking for. Let’s find a better place for you to go.
        </h2>
      </div>
    </LatestPostsLayout>
  )
}
