import Selector from '@/components/Selector'
import List from '@/components/List'

export default function Category({
  params,
} : {
  params: any
}) {
  return (
    <div>
      <Selector {...params} />
      <List {...params} />
    </div>
  )
}
