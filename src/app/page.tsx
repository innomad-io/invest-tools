import Image from 'next/image'
import List from '@/components/List'
import Selector from '@/components/Selector'

export default function Home() {
  return (
    <div>
      <Selector />
      <List />
    </div>
  )
}
