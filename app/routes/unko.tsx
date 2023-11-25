import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'New Unko' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return <h1>Unko</h1>
}
