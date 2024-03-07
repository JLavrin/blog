import Link from 'next/link';
import BlogCard from '@/app/blog/components/BlogCard';

type Props = {
  children: React.ReactNode;
  allArticles: {
    id: string;
    slug: string;
    subtitle: string;
    tag: string;
    title: string;
    publishDate: string;
    author: string;
    image: { alt: string; url: string; };
  }[]
}

export default function LatestPostsLayout({ children, allArticles }: Props) {
  return (
    <div className="flex pt-6 pb-24 md:px-8 gap-2">
      <div className="flex flex-col md:p-8 gap-4">
        <div>
          {children}
        </div>
        {/* divider */}
        <div className="w-9/12 h-px bg-gray-200 my-12 mx-auto" />
        <div className="flex flex-col gap-2 w-full items-center mb-10">
          <h3 className="font-semibold text-purple-700 text-base">Latest posts</h3>
          <h2 className="font-semibold text-4xl text-gray-900 mb-3">Resources and insights</h2>
          <p className="text-xl text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
        </div>
        <div className="flex  flex-col md:flex-row gap-8 mb-10">
          {allArticles.map((article, index) => (
            <BlogCard key={article.id} data={article} index={index} />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Link
            className="bg-purple-600 text-white rounded-md hover:bg-purple-700 py-2.5 px-4 focus:outline-none"
            href="/blog"
          >
            View all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
