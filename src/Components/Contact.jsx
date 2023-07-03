import { Container, FormControl, FormLabel, Input,Textarea,Button, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'


const AnimatedInput = motion(Input)
const AnimatedTextArea = motion(Textarea)

const AnimatedButton = motion (Button)
const Contact = () => {
  return (
    <Container fontFamily={"poppins"} textAlign={"center"} p="3" maxW={"container.lg"}>
        <Heading my="5">Reach Out</Heading>
       <form >
        <FormControl id="name" marginBottom="4">
          <FormLabel>Name</FormLabel>
          <AnimatedInput
          className={"shadow"} initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} placeholder='shinchan' type="text" required />
        </FormControl>

        <FormControl id="email" marginBottom="4">
          <FormLabel>Email</FormLabel>
          <AnimatedInput 
          className={"shadow"}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
           placeholder='shinchan@gmail.com' type="email" required />
        </FormControl>

        <FormControl id="message" marginBottom="4">
          <FormLabel>Message</FormLabel>
          <AnimatedTextArea
          className={"shadow"}
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }} placeholder='aaj mai sone 😴 mai boht busy hu!' rows={4} required />
        </FormControl>

        <AnimatedButton   
      
       size="sm" variant={"outline"}  type="submit" colorScheme="telegram">
          Submit
        </AnimatedButton>
      </form>
    </Container>
  )
}

export default Contact