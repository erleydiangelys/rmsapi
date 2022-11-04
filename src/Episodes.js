import React from 'react';
import {
  Box,
  Grid,
  Image,
  Flex,
  Text,
  Button,
  Spinner,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Icon,
} from '@chakra-ui/react';

import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'

import api from './services/api';

const img = 'https://sm.ign.com/t/ign_br/screenshot/default/rick-and-morty-6_xshv.1280.jpg'


function Episodes() {
  const [dados, setDados] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [totalItens, setTotalItens] = React.useState(0)

  const bgColor = useColorModeValue('gray.200', 'black')


  const busca = () => {
    api.get(`episode/`).then((item) => {
      setDados(item.data.results);
      console.log(item.data);
      // setTotalPages(item.data.info.pages)
      // setTotalItens(item.data.info.count)
    })
  }

  React.useEffect(() => {
    busca()
  }, [])

  return (
   
      <Box textAlign="center" fontSize="xl"  mt='20'  id='topo'>
        <Grid minH="100vh" p={3}>
          <Box justify="center">


            <Grid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap='5' justify='center'>
            {!loading ? (dados.map((item, index) => (
              <Flex key={index} direction='column' bg={bgColor} borderRadius='6' p='2'fontWeight='500'>
                <Flex  align='flex-start' direction='column'>
                  <Image src={img} />
                  <Flex direction='row' gap='1'><Text fontWeight='800'> Nome:</Text><Text>{item.name}</Text></Flex>
                  <Flex direction='row' gap='1'><Text fontWeight='800'> Episodio:</Text><Text>{item.episode}</Text></Flex>
                  <Flex direction='row' gap='1'><Text fontWeight='800'> Foi ao ar:</Text><Text>{item.air_date}</Text></Flex>

                  {/* <Box>
                    <Text>Residentes</Text>
                    {(item.residents.map((item, index) => {
                        <Text></Text>
                    }))}
                  </Box> */}
                </Flex>
              </Flex>
            )))
              : (<Spinner size='xl' />)
          }
            </Grid>

            {/* <Flex justifyContent="center" gap='5' mt='10'>
             {totalItens > 20 && page > 0 && <Button onClick={() => antPage()} colorScheme='yellow'>Pagina Anterior</Button>}
             {totalItens > 20 && page < totalPages && <Button onClick={() => proxPage()} colorScheme='yellow'>Pagina Posterior</Button>}
            </Flex> */}
          </Box>
        </Grid>
        <Box>

        </Box>
      </Box>
  );
}

export default Episodes;
