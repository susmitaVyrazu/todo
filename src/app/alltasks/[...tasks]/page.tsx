import { Container } from '@mantine/core'
import React from 'react'

const Page = ({ params }: any) => {
    console.log(params.tasks[0])
    return (
        <>
            <Container>
                <h1>Task Detail</h1>
                <h2>Task Title: {params.tasks[0]}</h2>
                <h2>Task Summary: {params.tasks[1]}</h2>
            </Container>
        </>
    )
}

export default Page