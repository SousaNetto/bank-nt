import { Box } from '@chakra-ui/react'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
    return (
        <Box minHeight='100vh' bg='#A332B3'>
            <Header />
            {children}
        </Box>
    )
}