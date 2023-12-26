import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { format } from "date-fns"

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }

    getData();
  }, [])

  const actualDate = new Date()
  const formattedDate = format(actualDate, 'dd/MM/yyyy HH:mm:ss')

  if(userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={formattedDate}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
            <Link to='/infoconta'>
              <Text fontSize='xl' color='white'>
                  Ver todas Informações
              </Text>
            </Link>
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
