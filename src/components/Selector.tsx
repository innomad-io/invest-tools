import Link from "next/link";
import { Button } from "@radix-ui/themes";
import cn from "classnames";

import { getAllTagsByCategory, getAllCategories } from "@/lib";

async function getCategoriesAndTags(category?: string) {
  const data = {
    categories: getAllCategories(),
    tags: [],
  };

  if (category) {
    const tags = getAllTagsByCategory(decodeURIComponent(category));
    data.tags = tags;
  }

  return data;
}

export default async function Selector({ category, tag }: any) {
  const categoryDecoded = decodeURIComponent(category);
  const tagDecoded = decodeURIComponent(tag);
  const { categories, tags } = await getCategoriesAndTags(category);

  return (
    <div>
      <div className="text-slate-800 text-sm my-3">根据“分类”和“Tag”筛选</div>
      <div className="flex flex-wrap">
        {categories &&
          categories.map((category: string, idx: number) => {
            // if category is actived
            const isActive = category === categoryDecoded;

            return (
              <div key={idx} className="mr-1">
                <Link href={`/${category}`}>
                  <Button
                    variant={isActive ? "soft" : "outline"}
                    size="1"
                    radius="large"
                    color={isActive ? "indigo" : "gray"}
                    className={cn("rounded-xl", {
                      "bg-white": !isActive,
                    })}
                  >
                    {category}
                  </Button>
                </Link>
              </div>
            );
          })}
      </div>

      <div className="flex flex-wrap mt-2">
        {tags &&
          tags.map((tag: string) => {
            const isActive = tag === tagDecoded;
            return (
              <div key={tag} className="mr-1">
                <Link href={`/${category}/${tag}`}>
                  <Button
                    variant={isActive ? "soft" : "outline"}
                    size="1"
                    radius="large"
                    color={isActive ? "indigo" : "gray"}
                    className={cn("rounded-xl", {
                      "bg-white": !isActive,
                    })}
                  >
                    {tag}
                  </Button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
