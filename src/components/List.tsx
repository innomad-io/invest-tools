import { Button } from '@radix-ui/themes'

import { getAllLinksByCategoryAndTag } from "@/lib";

export default function List(props: any) {
  const { category, tag } = props;

  const links = getAllLinksByCategoryAndTag(decodeURIComponent(category), tag);
  console.log(links)

  return <div className="flex mt-4">
    {
      links.map((link: any, idx: number) => {
        return (
          <div key={idx} className="w-60 h-30 border mr-2 bg-white p-2 border-slate-300 rounded">
            <div className="text-slate-800">{link.name}</div>
            <div className="text-sm text-slate-500 my-2">{link.desc}</div>
            <div>
              <a href={link.url} className="cursor-pointer">
                <Button variant="outline" size="1" color="gray">访问</Button>
              </a>
            </div>
          </div>
        );
      })
    }
  </div>;
}