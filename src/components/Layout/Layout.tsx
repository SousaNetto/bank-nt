import { Header } from '../Header/Header'
import { Login } from '../Login/Login'

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Login />
        </>
    )
}