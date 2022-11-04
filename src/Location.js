import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  useColorModeValue,
  Image,
  Flex,
  Text,
  Button,
  Spinner,
  Link,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useParams } from 'react-router-dom';

import api from './services/api';

const img = 'https://images.unsplash.com/photo-1620421680906-275860f61e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBsYW5ldGF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

function Location() {
  const [dados, setDados] = React.useState([])
  let { idLoc } = useParams();
  const bgColor = useColorModeValue('gray.200', 'black')
  
  // let idOrigem = 0
  // let idLocal= 0
  
  const busca = () => {
    api.get(`location/${idLoc}`).then((item) => {
      setDados(item.data);
      console.log(item.data);
    })
  }

  React.useEffect(() => {
    busca()
  }, [])

  return (
      <Flex textAlign="center" fontSize="xl"  mt='20' id='topo' justify='center'>
        <Grid p={3}>

                <Flex  align='center' direction={{base: 'column', md: 'row'}} bg={bgColor} borderRadius='6' p='2'fontWeight='500'>
                  <Image src={img} maxW={{md: '25%'}}/>
                  <Flex direction='column' align='flex-start' py='2' ml={{md: '10'}}>
                    <Flex direction='row' gap='1'><Text fontWeight='800'> Nome:</Text><Text>{dados.name}</Text></Flex>
                    <Flex direction='row' gap='1'><Text fontWeight='800'> Dimenção:</Text><Text>{dados.dimension}</Text></Flex>
                    <Flex direction='row' gap='1'><Text fontWeight='800'> Tipo:</Text><Text>{dados.type}</Text></Flex>
                  </Flex>
                </Flex>

        </Grid>
      </Flex>
  );
}

export default Location;
