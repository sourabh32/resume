import React from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { projects } from '../projects/projects'
const AnimatedContainer = motion(Container)
const ProjectMenu = () => {

    
  return (
    <AnimatedContainer
     
  
    fontFamily={"poppins"} textAlign={"center"} p="5" maxW={"container.lg"}>
      <Heading my="5">PROJECTS</Heading>
      <VStack spacing={10} >
      {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
      </VStack>
   
  </AnimatedContainer>
  )
}

export default ProjectMenu