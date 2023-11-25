import type { MetaFunction } from '@remix-run/cloudflare'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'New Unko' }, { name: 'description', content: 'Welcome to Remix!' }]
}
export async function loader({ request, context }: LoaderFunctionArgs) {
  return json({ unko: 'unko' })
}

export default function Index() {
  const { unko } = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>Unko</h1>
      <div>Unko</div>
      {unko}
      <h1>Unko</h1>
      <div>Unko</div>
    </div>
  )
}
