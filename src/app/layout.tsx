import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Theme, Tooltip, Button } from '@radix-ui/themes'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

import Sponsor from '@/components/Sponsor'

import '@radix-ui/themes/styles.css';
import './globals.css';

// import { getAllCategories } from '@/lib'

export const metadata: Metadata = {
  title: '投资工具箱',
  description: '投资工具箱 by Innomad',
  icons: {
    icon: 'https://innomad.io/favicon.png',
    shortcut: 'https://innomad.io/favicon.png',
  }
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
      <Script
        async
        defer
        data-website-id={process.env?.UMAMI_WEBSITE_ID}
        src={process.env?.UMAMI_URL}
      />

      <body>
        <Theme>
        <div className="flex flex-row h-screen relative z-0">
          <div className="w-12 h-screen bg-slate-800">
            <div className="py-2 text-center text-white">
              <Image
                className="inline-block"
                width={24}
                height={24}
                src="https://innomad.io/favicon.png"
                alt="投资工具箱 - by Innomad"
              />
            </div>
            <div className="mt-6">
              <Tooltip content="投资网址导航" side="right">
                <Link href="/" className="block py-1 text-slate-200 bg-slate-600 hover:bg-slate-600 hover:text-slate-50 transition-all duration-100">
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

          <div className="flex-1 p-6 pb-2 bg-slate-50 flex flex-col justify-between overflow-scroll">
            {children}

            <div className="mt-2 text-center text-sm text-slate-500">
              Built with ❤️ by <a href="https://innomad.io" target="_blank" className="text-slate-500 hover:text-slate-600 hover:underline transition-all duration-100">Innomad一挪迈</a>
            </div>
          </div>

          <div className="fixed top-3 right-6 z-10">
            <Sponsor />
            
          </div>
        </div>
        </Theme>
      </body>
    </html>
  )
}
