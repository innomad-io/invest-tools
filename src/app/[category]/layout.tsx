
export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: any,
}) {
  console.log(params)
  const currentCategory = params.category;

  return (
    <div>
      <h1 className="text-lg font-bold">{decodeURIComponent(currentCategory)}</h1>
      {children}
    </div>
  )
}
