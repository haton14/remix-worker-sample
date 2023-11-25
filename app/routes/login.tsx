import { Form, Link } from '@remix-run/react'

export default function Login() {
  return (
    <div>
      <p>Welcom back</p>
      <Form action="/auth/google" method="post">
        <button type="button">Continue with Google</button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  )
}
