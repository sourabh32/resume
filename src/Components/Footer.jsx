import { Container, HStack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import linkedin from "../assets/linked.png"
import github from "../assets/github.png"
import { motion } from 'framer-motion'

const AnimatedContainer = motion(HStack)
const Footer = () => {
  return (
    <Container
    
    
   
    fontFamily={"Roboto Condensed"} p="3" display="grid" placeItems={"center"} maxW={"container.lg"}>
      <Text my="5" fontSize={"1.5rem"} color="#2978b5" fontFamily={"cursive"}>Sourabh Bharadwaj</Text>
     <AnimatedContainer  initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }} my="2">
        <Image cursor={"pointer"} w="8" h="8" src={linkedin} />
        <Image  cursor={"pointer"} w="8" h="8"  src={github} />
     </AnimatedContainer>
     
    </Container>
  )
}

export default Footer