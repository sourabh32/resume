import { Button, Container, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion"
const Intro = () => {
  return (
    <Container textAlign={"center"} fontFamily={"Poppins"} placeItems={"center"} display={"grid"} maxW={"container.lg"}>
    <Heading   my="5"  fontWeight={800} fontSize={["2rem","3.5rem"]}  >Hi, I am <motion.span
    initial={{ opacity:0.5 }}
    whileInView={{ opacity:1}}
    
    transition={{ delay:0.5 }}
    style={{"color":"#2978b5"}}>Sourabh Bharadwaj.</motion.span></Heading>
    <Text  fontWeight={400}  fontSize={["1rem","1.5rem"]}  >Jr. ReactJS Developer</Text>
    <Text my="3" lineHeight={1.1} textAlign={"center"} fontWeight={600}  w={["90%","65%"]} fontSize={["1rem","1.5rem"]}   >All coding projects are built from the ground up, from planning and designing all the way to solving real-life problems with code.</Text>
    <Button my="3" size="sm" variant={"ghost"} colorScheme='telegram'>resume</Button>
    </Container>
  )
}

export default Intro