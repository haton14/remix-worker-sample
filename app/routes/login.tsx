import { Form } from '@remix-run/react'

export default function Login() {
  return (
    <div>
      <p>Welcom back</p>
      <Form action="/auth/google" method="post">
        <button type="button">Continue with Google</button>
      </Form>
    </div>
  )
}
