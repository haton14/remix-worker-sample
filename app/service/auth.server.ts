import type { AppLoadContext } from '@remix-run/cloudflare'
import { createCookie, createWorkersKVSessionStorage } from '@remix-run/cloudflare'
import { Authenticator } from 'remix-auth'
import { GoogleStrategy } from 'remix-auth-google'

export type AuthUser = {
  id: string
}

export function getGoogleID(context: AppLoadContext): Authenticator<AuthUser> {
  const googleStrategy = new GoogleStrategy(
    {
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'https://example.com/auth/google/callback',
    },
    async ({ profile }) => {
      // Get the user data from your DB or API using the tokens and profile
      return { id: profile.id }
    },
  )
  const cookie = createCookie('__session', {
    secrets: [context.SESSION_SECRET as string],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  const sessionStorage = createWorkersKVSessionStorage({
    kv: context.SESSION_KV as KVNamespace,
    cookie,
  })

  const authenticator = new Authenticator<AuthUser>(sessionStorage)

  authenticator.use(googleStrategy)
  return authenticator
}
