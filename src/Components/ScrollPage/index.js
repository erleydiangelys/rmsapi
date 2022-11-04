import { useState } from "react"
import { Box, Icon, Text, Link } from '@chakra-ui/react';
import { AngleUp } from '@styled-icons/fa-solid/AngleUp'

export default function ScrollPage() {

const [ pageYPosition, setPageYPosition ] = useState(0);

function getPageYAfterScroll(){
    setPageYPosition(window.scrollY);
}

window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <div>
      {pageYPosition > 350 &&
        <Link href="#topo" position='fixed' bottom='10px' right='10px' bg='rgba(0, 255, 0, 0.5)'  borderRadius='50px' color='white'
        >
          <Box px='2' py='1'>
            <Icon as={AngleUp} mb='1'/>
          </Box>
        </Link>
      }
    </div>
  )
}