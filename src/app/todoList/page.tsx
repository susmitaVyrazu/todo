"use client"; // This is a client component 
import React,{ useState } from 'react'
import Link from 'next/link';
// import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Container, Group, Title, Card, Text, useMantineColorScheme, Input, TextInput, rem } from '@mantine/core';
import { Trash, MoonStars, Sun, Pencil } from 'tabler-icons-react';
// import { IconExclamationCircle } from '@tabler/icons-react';
import styles from './page.module.css'

const Page = () => {
    const [data, setData] = useState<any>(
        [
            { id: 0, title: "Study", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis incidunt unde, porro quod quaerat ut, rem minima esse a optio, accusamus soluta facilis? Id voluptates voluptatibus nesciunt, asperiores repudiandae consequuntur quasi fuga. Nemo repudiandae quis ab dicta at! Ipsum, sint."},
            { id: 1, title: "Practice", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis incidunt unde, porro quod quaerat ut, rem minima esse a optio, accusamus soluta facilis? Id voluptates voluptatibus nesciunt, asperiores repudiandae consequuntur quasi fuga. Nemo repudiandae quis ab dicta at! Ipsum, sint." },
            { id: 2, title: "Implement", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis incidunt unde, porro quod quaerat ut, rem minima esse a optio, accusamus soluta facilis? Id voluptates voluptatibus nesciunt, asperiores repudiandae consequuntur quasi fuga. Nemo repudiandae quis ab dicta at! Ipsum, sint.    " }
        ])
    // for opening the add task modal
    // const [opened, { open, close }] = useDisclosure(false);
    const [opened, setOpened] = useState(false);



    // for toggle between dark theme and light theme
    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const handleThemeColor = () => {
        colorScheme === "dark" ? setColorScheme('light') : setColorScheme('dark')
    }


    // for addind task
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [id, setId] = useState(3);
    const addTask = (event: any) => {
        setId(id + 1)
        setData((prev: any) => [...prev, { id, title: title, summary: summary }])
        setTitle("")
        setSummary("")
        setOpened(false);
        console.log(data)
    }

    function deleteTask(e: any) {
        console.log("iddddd", e)
        console.log(data.filter((i: any) => i.id != e.target.id))
        setData((prev: any) => prev.filter((item: any) => item.id != e.target.id))
    }
    return (
        <>
            <>
                <Modal opened={opened} withCloseButton={false} onClose={() => {
                    setOpened(false);
                }} title="Add task" centered>
                    {/* Modal content */}
                    <TextInput
                        mt="md"
                        value={title}
                        label="Title "
                        placeholder="Task Title"
                        onChange={(event) => setTitle(event.currentTarget.value)}
                        // error="Input error"
                        withErrorStyles={false}
                        required
                    />
                    <TextInput
                        mt="md"
                        label="Summary"
                        value={summary}
                        placeholder="Task Summary"
                        onChange={(event) => setSummary(event.currentTarget.value)}
                        // error="Input error"
                        withErrorStyles={false}
                        required
                    />
                    <Group mt={'md'} justify="space-between">
                        <Button
                            onClick={() => {
                                setOpened(false);
                            }}
                            variant={'subtle'}>
                            Cancel
                        </Button>
                        <Button
                            onClick={(event) => {
                                addTask(event)
                            }}>
                            Create Task
                        </Button>
                    </Group>
                </Modal>


                {/* container */}
                <Container className="todo-container" size={600} py={50}>
                    <Group justify="space-between">
                        <Title >
                            My Tasks
                        </Title>

                        {colorScheme === "dark" ? <Sun
                            size={28}
                            strokeWidth={1}
                            onClick={() => handleThemeColor()}
                        />
                            : <MoonStars
                                size={28}
                                strokeWidth={1}
                                color={'#000000'}
                                onClick={() => handleThemeColor()}
                            />}
                    </Group>


                    {data.length ? data.map((i: any, j: number) => {
                        return (
                            <>
                                <Card key={j} shadow="sm" padding="lg" my={20} mt="md">
                                    <Group justify="space-between">
                                        <Text size="lg" className={styles.title}>
                                            {i.title}
                                        </Text>
                                        <Group>
                                            <Trash
                                                id={i.id} onClick={(event: any) => deleteTask(event)}
                                                size={28}
                                                strokeWidth={2}
                                                color={'maroon'}
                                            />
                                            <Link 
                                             href={{
                                                pathname: '/todoList/${i.title}',
                                                query: {
                                                    title: i.title,
                                                    summary: i.summary
                                                }
                                              }}>

                                            {/* //  href={`/todoList/${i.title}`}   */}
                                            <Pencil
                                                    size={28}
                                                    strokeWidth={2}
                                                    color={'black'}
                                                /></Link>
                                        </Group>
                                    </Group>
                                    <Text mt={20} size="sm">
                                        {i.summary}
                                    </Text>
                                </Card>
                            </>


                        )
                    }) :

                        <Card shadow="sm" padding="lg" my={20}>  <Text size={'lg'} mt={'md'} color={'dimmed'}>
                            You have no tasks.</Text> </Card>}


                    <Button onClick={() => {
                        setOpened(true);
                    }}
                        fullWidth
                        mt={'md'}
                    >Add Task</Button>
                </Container>
                {/* container */}
            </>
        </>
    )
}

export default Page