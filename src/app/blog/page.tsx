import { performRequest } from "@/utils/datocms";
import FirstArticle from "@/app/blog/components/FirstArticle";
import BlogCard from "@/app/blog/components/BlogCard";

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

export default async function BlogListing() {

  const { data: { allArticles } } = await performRequest<BlogIndexResponse>({
    query: `
   {
    allArticles {
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
  `
  })

  const [firstArticle, ...restArticles] = allArticles


  return (
    <div className="container">
      <div className="pt-16 md:pt-24 pb-16 flex flex-col gap-3">
        <h3 className="font-semibold text-purple-700">Our blog</h3>
        <h2 className="font-semibold text-5xl text-gray-900 mb-3">Resources and insights</h2>
        <p className="text-xl text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
      </div>
      <FirstArticle data={firstArticle} />
      <div className="w-9/12 h-px bg-gray-200 my-12 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {restArticles.map(article => (
          <BlogCard key={article.id} data={article} />
        ))}
      </div>
    </div>
  )
}

