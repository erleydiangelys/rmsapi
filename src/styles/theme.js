import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'gray.500',
          fontWeight: '14px',
        },
      }
    }
  },
  // styles: {
  //   global: (props) => ({
  //     'html, body': {
  //       fontSize: 'sm',
  //       background: props.colorMode === 'dark' ? 'gray.600' : 'yellow.50',
  //       color: props.colorMode === 'dark' ? 'white' : 'black',
  //       lineHeight: 'tall',
  //     },
      
  //   }),
  // },


};

const breakpoints = {
    sm: '320px',
    xsm:'500px',
    md: '800px',
    lg: '960px',
    xl: '1200px',
  }

const theme = extendTheme(customTheme, {breakpoints});

export default theme;