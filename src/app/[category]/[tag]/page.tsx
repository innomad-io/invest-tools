import List from "@/components/List"
import Selector from "@/components/Selector"

export default function TagPage({
  params,
}: {
  params: any
}) {
  return (
    <div>
      <Selector {...params} />
      <List {...params} />
    </div>
  )
}
