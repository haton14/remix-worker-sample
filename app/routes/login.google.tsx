import { type ActionFunctionArgs, redirect } from '@remix-run/cloudflare'

// TODO: state, nonceを発行する
// TODO: サーバーサイドでclient_id, client_secretを環境変数から取得する
export const loader = () => redirect('https://accounts.google.com/o/oauth2/auth?hogehoge')

export const action = ({ request, context }: ActionFunctionArgs) => {
  console.log('[auth.google] action()', context)
}
