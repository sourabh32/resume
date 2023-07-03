import React from 'react'
import { Container,Box,Text} from '@chakra-ui/react'
import { motion } from 'framer-motion'
const AnimatedText  = motion(Text)
const Header = () => {
  return (
    <Box fontFamily={"poppins"} p="4">
     <AnimatedText initial={{y:-20}} whileInView={{y:0}} transition={{delay:0.5}} fontWeight={600}  fontSize={"1.5rem"} >
        S<span style={{"color":"#2978b5"}}>.react()</span>
     </AnimatedText>
    </Box>
  )
}

export default Header