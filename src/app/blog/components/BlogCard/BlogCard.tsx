import Image from 'next/image';
import Link from 'next/link';
import { BlogIndexResponse } from '@/app/blog/page';
import dayjs from '@/utils/dayjs';

type Props = {
  data: BlogIndexResponse['allArticles'][number]
}

export default function BlogCard({ data }: Props) {
  return (
    <Link href={`/blog/${data.slug}/`}>
      <div className="flex flex-col gap-5 cursor-pointer max-w-sm">
        <div className="relative object-cover object-center max-w-sm w-auto h-[240px] overflow-hidden rounded-2xl">
          <Image className="object-cover object-center" src={data.image.url} alt={data.image.alt} fill />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-purple-700">{data.tag.split(',')[0]}</p>
          <div className="flex justify-between gap-2">
            <h4 className="font-semibold text-xl text-gray-900 line-clamp-2">{data.title}</h4>
            <div className="self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                role="img"
                strokeWidth="1"
                strokeLinecap="square"
                color="inherit"
                stroke="currentColor"
                strokeLinejoin="miter"
                fill="none"
              >
                <path d="M19 13V5h-8" />
                <path strokeLinecap="round" d="M19 5l-1 1" />
                <path d="M 18 6 L 10.558 13.581" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{data.subtitle}</p>
          <div>
            <div className="flex gap-5">
              <div className=" relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={data.image.url} alt={data.image.alt} fill />
              </div>
              <div>
                <h4 className="text-gray-900 text-sm font-semibold">{data.author}</h4>
                <p className="text-sm text-gray-600">{dayjs(data.publishDate).format('d MMM YYYY')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
