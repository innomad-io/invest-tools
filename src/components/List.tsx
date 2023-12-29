import Image from 'next/image';
import { Button } from '@radix-ui/themes'

import { getAllLinksByCategoryAndTag } from "@/lib";

export default function List(props: any) {
  const { category, tag } = props;

  const links = getAllLinksByCategoryAndTag(category, tag);

  return <div className="flex mt-4 flex-wrap">
    {
      links.map((link: any, idx: number) => {
        return (
          <div key={idx} className="flex flex-col justify-between w-60 h-32 border mr-3 my-2 bg-white p-2 border-slate-300 rounded shadow-md transition-shadow duration-200 hover:shadow-xl">
            <div>
            <div className="text-slate-800 flex">
              <Image
                src={link.icon || `https://www.google.com/s2/favicons?domain=${link.url}&sz=64`}
                alt={link.name}
                width={16}
                height={16}
                className="object-contain"
              />
              <div className="ml-2">{link.name}</div>
            </div>
            <div className="text-sm text-slate-500 my-2">{link.desc}</div>
            </div>
            <div className="flex justify-end">
              {
                link.aff && (
                  <a href={link.aff} rel="noopener noreferrer" target='_blank' className="mr-2">
                    <Button variant="surface" size="1" color="crimson" className="rounded-md w-20">邀请链接</Button>
                  </a>
                )
              }
              <a href={link.url} rel="noopener noreferrer" target='_blank'>
                <Button variant="outline" size="1" color="gray" className="rounded-md w-20">访问</Button>
              </a>
            </div>
          </div>
        );
      })
    }
  </div>;
}