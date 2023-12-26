import { Text } from "@chakra-ui/react";
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
        <Text color='white' padding='2rem'>
          <Text fontSize='3xl' fontWeight='bold'>Informações da conta</Text>
          <Text fontSize='lg'>{`nome: ${userData?.name}`}</Text>
          <Text fontSize='lg'>{` email: ${userData?.email}`}</Text>
          <Text fontSize='lg'>{`senha: ${userData?.password}`}</Text>
          <Text fontSize='lg'>{`saldo: R$ ${userData?.balance}`}</Text>
          <Text fontSize='lg'>{`id da conta: ${userData?.id}`}</Text>
        </Text>

        <Link to='/conta/1'>
            <Text fontSize='xl' color='black' pl='2rem' textDecor="underline">
                Ir para Conta
            </Text>
        </Link>
    </>
  );
};
export default ContaInfo;
