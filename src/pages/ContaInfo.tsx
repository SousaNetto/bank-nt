import { Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const ContaInfo = () => {
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }
    
    getData();
  }, [])


  return (
    <>
    <Center>
        <Text fontSize='3xl' fontWeight='bold' color='white'>
          <Text>Informações da conta</Text>
          <Text>{`${userData?.name}`}</Text>
          <Text>{`${userData?.email}`}</Text>
        </Text>
    </Center>
        <Link to='/conta/1'>
            <Text fontSize='xl' color='white'>
                Ir para Conta
            </Text>
        </Link>
    </>
  );
};
export default ContaInfo;
