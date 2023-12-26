import { AppContext } from './AppContext'
import '../css/Header.css'
import { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'


export const Header = () => {
    const {isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()


    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }
        return (
            <>
                <div className='header'>
                    <div className='logo'>Bank NT</div>
                    <div>
                        <ul>
                            <li><a href="#">Página inicial</a></li>
                            <li><a href="#">Para você</a></li>
                            <li><a href="#">Para seu negócio</a></li>
                {
                    isLoggedIn && (
                            <li>
                                <Button className='button-logout'
                                onClick={() => logout()}
                                >
                                    Sair
                                </Button>
                            </li>
 
                    )
                }
                        </ul>
                    </div>
                </div>
            </>
        )}
