import { Login } from "../components/Login";
import { useContext, useState } from "react";
import { Center, Input, Button } from "@chakra-ui/react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";


const Home = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
      const loggedIn = await login(email, password)

      if(!loggedIn) {
        return alert('email ou senha inválido')
      }

      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate('/conta/1')
    }
    
    return (
        <Login>
            <Center fontSize="1.2rem" fontWeight="bold" marginBottom="25px">
            <h1>Faça o login</h1>
          </Center>
          <Input type="email" placeholder="Email" mb="15px" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input type="password" placeholder="Password" mb="15px" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Center>
              <Button onClick={() => validateUser(email, password)} bg="#A332B3" color="#FFF" size="sm" w='100%'>
                Entrar
              </Button>
            </Center>
        </Login>
    )
}

export default Home;