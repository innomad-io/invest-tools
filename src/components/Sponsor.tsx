'use client'
import Image from 'next/image'
import * as React from 'react'
import { Button } from '@radix-ui/themes'
import * as HoverCard from '@radix-ui/react-hover-card'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Nav() {
    return (
        <HoverCard.Root openDelay={200} closeDelay={200}>
            <HoverCard.Trigger >
                <a href="https://afdian.net/a/innomad" target="_blank" rel="noopener noreferrer" >
                    <Button size="3" color="crimson" variant="soft"><HeartIcon className="w-5 h-5" />赞赏作者</Button>
                </a>
            </HoverCard.Trigger>
            <HoverCard.Content collisionPadding={10} side="bottom" sideOffset={26} align="start" className="bg-white shadow-lg p-2 rounded border-slate-100">
                <Image width="150" height={150} src="https://assets.innomad.io/appreciate-qr.png" alt="赞赏作者" className="inline-block w-48" />
                <div className="mb-2 text-center text-slate-600">微信扫码打赏作者</div>
            </HoverCard.Content>
        </HoverCard.Root>
    )
}