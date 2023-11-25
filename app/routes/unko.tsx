import type { MetaFunction } from '@remix-run/cloudflare'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'New Unko' }, { name: 'description', content: 'Welcome to Remix!' }]
}
export async function loader({ request, context }: LoaderFunctionArgs) {
  return json({ unko: 'unko' ,wanko:'wanko'})
}

export default function Index() {
  const  user  = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>Unko</h1>
      <div>wanko</div>
      <code>{JSON.stringify(user)}</code>
      <h1>wanko2</h1>
      <div>wanko3</div>
    </div>
  )
}
