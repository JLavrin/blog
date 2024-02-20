import {performRequest} from "@/utils/datocms";
import Image from "next/image";
import ColorfulTag from "@/infrastructure/components/ColorfulTag/ColorfulTag";
import dayjs from "@/utils/dayjs";
import securityDynamicVariablesCheck from "@/utils/datocms/securityDynamicVariablesCheck";
import isSlugSave from "@/utils/datocms/securityDynamicVariablesCheck";

type Response = {
  article: {
    id: string
    slug: string
    subtitle: string
    tag: string
    title: string
    publishDate: string
    content: 'todo'
    author: string
    image: {
      alt: string
      url: string
    }
  }
}

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPage({ params: { slug } }: Props) {

  if (!isSlugSave(slug)) {
    return null
  }

  const { data: { article } } = await performRequest<Response>({
    query: `
   {
    article(filter: { slug: { eq: "${slug}" }}) {
      id
      slug
      subtitle
      tag
      title
      publishDate
      content {
        blocks
        links
        value
      }
      author
      image {
        alt
        url
      }
    }
  }
  `
  })

  const tagsArray = article.tag.includes(',') ? article.tag.split(',') : [article.tag]
  const formattedPublishDate = dayjs(article.publishDate).format('d MMM YYYY')
  const seoDateTime = dayjs(article.publishDate).toISOString()

  return (
    <div className="py-24 flex flex-col gap-16">
      <div className="flex flex-col justify-center text-center gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col justify-center text-center gap-4">
          <time className="text-purple-600 text-base font-semibold" dateTime={seoDateTime}>Published {formattedPublishDate}</time>
          <h1 className="text-5xl font-semibold">{article.title}</h1>
        </div>
          <h2 className="text-xl text-gray-600">{article.subtitle}</h2>
        <div className="flex gap-2 justify-center items-middle">
          {tagsArray.map(tag => (
            <ColorfulTag key={tag} value={tag} />
          ))}
        </div>
      </div>
      <div className="container relative mx-auto p-4 min-h-96">
        <Image className="object-cover" src={article.image.url} alt={article.image.alt || ''} fill />
      </div>
    </div>
  )
}
