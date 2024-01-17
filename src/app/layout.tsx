import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './globals.css'
import { Header } from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'todo',
  description: 'Generated by create next app',
}


// // theme
// const theme = createTheme({
//   components: {
//     InputWrapper: Input.Wrapper.extend({
//       defaultProps: {
//         inputWrapperOrder: ['label', 'input', 'error'],
//       },
//     }),
//   },
// });





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}> <MantineProvider>
         <Header/>
        {children}</MantineProvider></body>
    </html>
  )
}
