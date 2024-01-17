import React from 'react'
import Link from 'next/link'
import { Container, Group } from '@mantine/core'

const About = () => {
  return (
    <Container>
      <h1>About Page</h1>
      <Group>
        <Link className="btns" href="/aboutus/aboutCompany">Go to About Company</Link>
        <Link className="btns" href="/aboutus/aboutEmployee">Go to About Employee</Link>
        <Link className="btns" href="/">Go to Home</Link>
      </Group>
    </Container>
  )
}

export default About