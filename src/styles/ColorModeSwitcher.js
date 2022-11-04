import React from 'react';
import { useColorMode, useColorModeValue, Button, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Tooltip hasArrow label='Clique para alterar o tema' fontSize='12' placement='left-end'>
      <Button 
        variant='ghost' onClick={toggleColorMode}>
        <SwitchIcon size='15'/>
      </Button>
    </Tooltip>
  );
};
