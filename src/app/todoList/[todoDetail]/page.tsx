'use client'
import { Button, Container } from '@mantine/core'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import style from './todetail.module.css'
import { useRouter } from 'next/navigation';



const TodoDetail = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const title = searchParams.get('title')?.toUpperCase()
    const summary = searchParams.get('summary')

    return (
        <>
            <Container size={800}>
                <h1>TODO Details:</h1>
                <h3 className={style.heading}>Title- {title}</h3>
                <p>Summary:{summary}</p>
                <Button
                    onClick={() => {
                        router.back()
                    }}>
                    Back
                </Button>
            </Container>

        </>

    )
}

export default TodoDetail