import React from 'react'
import Link from 'next/link'
import { Group, Container } from '@mantine/core'

const LoginAdmin = () => {
  return (
    <Container>
      <h1>Signup Page</h1>
      <Group>

        <Link className="btns" href="/signup/signupAdmin">Go to Admin Signup</Link>
        <Link className="btns" href="/signup/signupClient">Go to Client Signup</Link>
        <Link className="btns" href="/">Go to Home</Link>
      </Group>
    </Container>

  )
}

export default LoginAdmin