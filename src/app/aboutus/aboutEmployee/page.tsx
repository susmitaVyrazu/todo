import { Group } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { Container } from '@mantine/core'

const AboutEmployee = () => {
    return (
        <Container>
            <h1>aboutEmployee</h1>
            <Group>
                <Link className="btns" href="/aboutus">Go to About Page</Link>
                <Link className="btns" href="/aboutus/aboutCompany">Go to About Company Page</Link>
                <Link className="btns" href="/">Go to Home</Link>
            </Group>

        </Container>

    )
}

export default AboutEmployee