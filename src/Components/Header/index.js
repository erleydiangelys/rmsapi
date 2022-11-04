import React from 'react'
import { Link as ReactLink } from "react-router-dom";

import {
  Icon,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
  Heading,
  useToast,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Play } from '@styled-icons/fluentui-system-regular/Play';
import { Planet } from '@styled-icons/ionicons-outline/Planet';
import { Person } from '@styled-icons/bootstrap/Person';

import { ColorModeSwitcher } from './../../styles/ColorModeSwitcher';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()


  const Links = [
    { nome: ' Personagens', link: '/', icon: Person },
    { nome: ' Planetas', link: 'location', icon: Planet },
    { nome: ' Episodios', link: 'episode', icon: Play },
  ];

  const NavLink = ({ children }) => (
    <ReactLink //tive que mudar para o link do react 
      to={children.link}
    >
      <Flex align="center"  _hover={{ color: "lime"}}>
        <Icon ml='1' as={children.icon} />
        <Text cursor='pointer'>{children.nome}</Text>
      </Flex>
    </ReactLink>
  );

  return (
    <>
    
      <Box px={4} bg={useColorModeValue('white', '#1a202c')} position='fixed' w='100%' top='0' left='0' zIndex='999'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
              <ReactLink to='/' >
                <Heading fontSize={{ md: '20' }} mr='20vw' p='5'  cursor='pointer'  _hover={{ color: "lime"}}>Rick and Morty</Heading>
              </ReactLink >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher />

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
            </Menu>

          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Header