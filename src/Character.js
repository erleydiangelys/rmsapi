import React from 'react';
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Image,
  Flex,
  Text,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useParams } from 'react-router-dom';

import api from './services/api';



function Character() {
  const [dados, setDados] = React.useState([])
  const [idOrigem, setIdOrigem] = React.useState(0)
  const [idLocal, setIdLocal] = React.useState(0)
  let { id } = useParams();
  const bgColor = useColorModeValue('gray.200', 'black')

  // let idOrigem = 0
  // let idLocal= 0

  const busca = () => {
    api.get(`character/${id}`).then((item) => {
      setDados(item.data);
      const chars = item.data.origin.url.split('location/');
      const chars2 = item.data.location.url.split('location/');
      setIdOrigem(chars[1])
      setIdLocal(chars2[1])
      console.log(item.data);
    })
  }

  React.useEffect(() => {
    busca()
  }, [])

  return (
    <Flex textAlign="center" fontSize="xl" mt='20' justify='center'>
      <Grid p={3} >
        <Flex align='center' direction={{ base: 'column', md: 'row' }} bg={bgColor} borderRadius='6'
          p='2' fontWeight='500'>
          <Image src={dados.image} />
          <Flex direction='column' align='flex-start' ml='2' gap='1' mb='2'>
            {dados.name && <Text mb='5' fontSize='30' fontFamily='Concert One'> Nome: {dados.name}</Text>}
            {dados.species && <Flex direction='row' gap='1'>
              <Text fontWeight='800'>Especie:</Text><Text>{dados.species}</Text></Flex>}
            {dados.status && <Flex direction='row' gap='1'>
              <Text fontWeight='800'>status:</Text><Text>{dados.status}</Text></Flex>}
            {dados.origin && dados.origin.name !== 'unknown' && <Link to={`location/${idOrigem}`}>
              <Flex direction='row' gap='1'>
                <Text fontWeight='800'> origem: </Text><Text>{dados.origin.name}</Text></Flex>
            </Link>}
            {dados.location && <Link to={`location/${idLocal}`}>
              <Flex direction='row' gap='1'>
                <Text fontWeight='800'>local:</Text><Text>{dados.location.name}</Text></Flex>
            </Link>}
          </Flex>
        </Flex>

      </Grid>
    </Flex>
  );
}

export default Character;
