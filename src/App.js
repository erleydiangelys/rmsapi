import React from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  Flex,
  Text,
  Button,
  Spinner,
  useColorModeValue,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from '@chakra-ui/react';

import { Plus } from '@styled-icons/entypo/Plus'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'

import api from './services/api';

const img = 'https://images.unsplash.com/photo-1534860819755-a2892df18f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGVtcHR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'


function App() {
  const [dados, setDados] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [totalItens, setTotalItens] = React.useState(0)
  const [vazio, setVazio] = React.useState(false)

  const bgColor = useColorModeValue('gray.200', 'black')

  const busca = () => {
    api.get(`character/?page=${page}`).then((item) => {
      setDados(item.data.results);
      setTotalPages(item.data.info.pages)
      setTotalItens(item.data.info.count)
      console.log(item.data.results);
    })
  }

  const search = () => {
    api.get(`character/?name=${inputValue}`).then((item) => {
      setDados(item.data.results);
      setTotalPages(item.data.info.pages)
      setTotalItens(item.data.info.count)
      console.log(item.data.results);
    }).catch((err) => {
      setVazio(true);
      
    })
  }

  const proxPage = () => {
    setLoading(true)
    setPage(page + 1)
    busca()
    setLoading(false)
  }

  const antPage = () => {
    setLoading(true)
    setPage(page - 1)
    busca()
    setLoading(false)
  }

  React.useEffect(() => {
    busca()
  }, [])

  return (

    <Box textAlign="center" fontSize="xl" mt={{ base: '30px', md: '40px' }} id='topo'>
      <Grid minH="100vh" p={3}>
        <Box justify="center">

          <Flex justify='center'>
            <InputGroup m='6' maxW={{ md: '90%' }}>
              <Input type='text' focusBorderColor='lime' placeholder='Buscar Personagem' onChange={(e) => setInputValue(e.target.value)} />
              <InputRightElement children={
                <IconButton onClick={() => search()} variant='ghost' icon={<Icon as={SearchAlt} />} />} />
            </InputGroup>
          </Flex>
          
          {vazio ? (
              <Flex direction='column' justify='center' bg={bgColor} boxShadow='lg' borderRadius='6' p='2'>
                {/* <Image src={img}/> */}
                <Text>Sem dados a exibir para essa consulta</Text>
                <Text>tente uma outra palavra</Text>
              </Flex>
          ) : (
          <Flex flexWrap='wrap' gap='5' justify='center'>
            {!loading ? (dados.map((item, index) => (
              <Flex key={index} direction='column' bg={bgColor} boxShadow='lg' borderRadius='6' p='2' fontWeight='500'>
                <Flex align='flex-start' direction='column'>
                  <Image src={item.image} />
                  <Box my='2'>
                    <Flex gap='1'><Text ml='2' fontWeight='800'> Nome:</Text> <Text>{item.name}</Text> </Flex>
                    <Flex gap='1'><Text ml='2' fontWeight='800'> Especie:</Text> <Text>{item.species}</Text></Flex>
                  </Box>
                </Flex>
                <Flex justify='flex-end'>
                  <Link to={`character/${item.id}`}>
                    <Button bg='lime' color='black' leftIcon={<Icon as={Plus} />}>Detalhes</Button>
                  </Link>
                </Flex>
              </Flex>
            )))
              : (<Spinner size='xl' />)
            }
          </Flex>

          )}
          

          <Flex justifyContent="center" gap='5' mt='10'>
            {!vazio && totalItens > 20 && page > 0 && <Button onClick={() => antPage()} colorScheme='yellow'>Pagina Anterior</Button>}
            {!vazio && totalItens > 20 && page < totalPages && <Button onClick={() => proxPage()} colorScheme='yellow'>Pagina Posterior</Button>}
          </Flex>
        </Box>
      </Grid>
      <Box>

      </Box>
    </Box>
  );
}

export default App;
