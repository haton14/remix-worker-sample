import { Form } from '@remix-run/react'

export default function Signup() {
  return (
    <div>
      <p>Create your account</p>
      <Form action="/auth/google" method="post">
        <button type="button">Continue with Google</button>
      </Form>
    </div>
  )
}
