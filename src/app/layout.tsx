import type { Metadata } from 'next'
import Link from 'next/link'
import { Theme, Tooltip } from '@radix-ui/themes'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

import '@radix-ui/themes/styles.css';
import './globals.css';

// import { getAllCategories } from '@/lib'

export const metadata: Metadata = {
  title: '投资工具箱',
  description: '投资工具箱 by Innomad',
}

export default function RootLayout({
  params,
  children,
}: {
  params: any,
  children: React.ReactNode
}) {
  // const categories = getAllCategories();

  return (
    <html lang="en">
      <body>
        <Theme>
        <div className="flex flex-row h-screen">
          <div className="w-12 h-screen bg-slate-800">
            <div className="text-white">Logo</div>
            <div className="mt-6">
              <Tooltip content="投资网址导航" side="right">
                <Link href="/" className="py-1 text-slate-200 hover:bg-slate-600 hover:text-slate-50 transition-all duration-100">
                  <PaperAirplaneIcon className="w-5 h-5 mx-auto" />
                </Link>
              </Tooltip>
            </div>
          </div>

          {/* <div className="w-40 h-screen p-4 bg-white border-r border-gray-200">
            <div className="text-black mb-5 font-bold">分类</div>
            { 
              categories.map((category: any) => (
                <div key={category} className="text-sm my-3 hover:text-gray-500">
                  <Link href={`/${category}`}>{category}</Link>
                </div>
              ))
            }
          </div> */}

          <div className="flex-1 p-6 bg-slate-50">
            {children}
          </div>
        </div>
        </Theme>
      </body>
    </html>
  )
}
