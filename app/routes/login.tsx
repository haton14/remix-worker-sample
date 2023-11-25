import { type ActionFunctionArgs, redirect } from '@remix-run/cloudflare'
import { Form, Link, Outlet } from '@remix-run/react'

export const action = ({ request, context }: ActionFunctionArgs) => {
  return redirect('/login/google')
}

export default function Login() {
  // web sessionがないとき
  return (
    <div>
      <p>Welcom back</p>
      <Form method="post">
        <button type="submit">Continue with Google</button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>

      <Outlet />
    </div>
  )
  // TODO: web sessionがあるときはloaderでリダイレクトする
}
