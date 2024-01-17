import React from 'react'
import Link from 'next/link'
import { Group } from '@mantine/core'
import { Container } from '@mantine/core'

const AboutCompany = () => {
    return (
        <Container>
            <h1>aboutCompany</h1>
            <Group>
                <Link className="btns" href="/aboutus">Go to About Page</Link>
                <Link className="btns" href="/aboutus/aboutEmployee">Go to About Employee Page</Link>
                <Link className="btns" href="/">Go to Home</Link>
            </Group>
      </Container>

    )
}

export default AboutCompany