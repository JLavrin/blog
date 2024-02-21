import {BlogIndexResponse} from "@/app/blog/page";
import Image from "next/image";
import ColorfulTag from "@/infrastructure/components/ColorfulTag";
import Link from "next/link";
import dayjs from "@/utils/dayjs";
import BlogCard from "@/app/blog/components/BlogCard";

type Props = {
  data: BlogIndexResponse['allArticles'][number]
}
export default function FirstArticle({ data }: Props) {
  const tagsArray = data.tag.includes(',') ? data.tag.split(',') : [data.tag]

  return (
    <>
      <div className="md:hidden">
        <BlogCard data={data}/>
      </div>
      <Link href={`/blog/${data.slug}`}>
        <div
          className="items-end cursor-pointer hidden container relative mx-auto p-4 md:flex min-h-[240px] md:min-h-[720px] rounded-2xl overflow-hidden">
          <div className="z-0">
            <Image src={data?.image.url || ''} alt={data?.image.alt || ''} fill className="object-cover object-center"/>
          </div>
          <div className="relative z-10 flex flex-col items-start gap-y-4 p-4 md:p-8 w-full">
            <div className="flex justify-between w-full text-white">
              <h3 className="text-2xl text-white font-semibold">{data.title}</h3>
              <div className="text-white fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" role="img"
                     strokeWidth="1" strokeLinecap="square" color="inherit" stroke="currentColor"
                     strokeLinejoin="miter" fill="none">
                  <path d="M19 13V5h-8"/>
                  <path strokeLinecap="round" d="M19 5l-1 1"/>
                  <path d="M 18 6 L 10.558 13.581"/>
                </svg>
              </div>
            </div>
            <p className="text-white">{data.subtitle}</p>
            <div className="w-full flex grid-rows-2 text-white text-sm gap-8">
              <div className="flex flex-col gap-2 ">
                <div>Written by</div>
                <div className="flex gap-3 items-center">
                  <div className="relative rounded-full h-10 w-10 overflow-hidden">
                    <Image src={data.image.url} alt="author" fill/>
                  </div>
                  <p>{data.author}</p>
                </div>
              </div>
              <div className="flex grow flex-col gap-2 justify-between">
                <div>Published on</div>
                <div className="h-10 flex items-center">
                  <p className="font-semibold text-base">{dayjs(data.publishDate).format('d MMMM YYYY')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex">File under</div>
                <div className="h-10 flex items-center">
                  <div className="flex gap-2">
                    {tagsArray.map(tag => (
                      <ColorfulTag key={tag} value={tag} monochrome/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/>
        </div>
      </Link>
      </>
      )
      }
