
'use client'
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';




export default function Home() {

  const router=useRouter()

  return (
    <>
     <div className="App">
     <Button 
        onClick={() => {
           router.push("todoList")
        }}>
        Create TODO
      </Button>
     </div>
      
    </>
  )
}
