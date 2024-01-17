import Link from 'next/link'
import React from 'react'
import { Container, Group } from '@mantine/core'

const Page = () => {
    return (
       <Container>
            <h1>Sinup Page Admin</h1>
            <Group>
                <Link className="btns" href="/signup">Go to Signup Page</Link>
                <Link className="btns" href="/">Go to Home</Link>
            </Group>
            </Container>
    )
}

export default Page