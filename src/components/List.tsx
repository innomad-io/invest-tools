import Image from 'next/image';
import { Button } from '@radix-ui/themes'

import { getAllLinksByCategoryAndTag } from "@/lib";

export default function List(props: any) {
  const { category, tag } = props;

  const links = getAllLinksByCategoryAndTag(decodeURIComponent(category), tag);
  console.log(links)

  return <div className="flex mt-4 flex-wrap">
    {
      links.map((link: any, idx: number) => {
        return (
          <div key={idx} className="w-60 h-30 border mr-3 my-2 bg-white p-2 border-slate-300 rounded shadow-md transition-shadow duration-200 hover:shadow-xl">
            <div className="text-slate-800 flex">
              <Image
                src={`https://www.google.com/s2/favicons?sz=64&domain_url=${link.url}`}
                alt={link.name}
                width={16}
                height={16}
                className="object-contain"
              />
              <div className="ml-2">{link.name}</div>
            </div>
            <div className="text-sm text-slate-500 my-2">{link.desc}</div>
            <div className="flex justify-end">
              {
                link.aff && (
                  <a href={link.url} rel="noopener noreferrer" target='_blank' className="mr-2">
                    <Button variant="surface" size="1" color="crimson" className="rounded-md">邀请链接</Button>
                  </a>
                )
              }
              <a href={link.url} rel="noopener noreferrer" target='_blank'>
                <Button variant="outline" size="1" color="gray" className="rounded-md">访问</Button>
              </a>
            </div>
          </div>
        );
      })
    }
  </div>;
}