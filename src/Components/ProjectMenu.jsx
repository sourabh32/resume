import React from 'react'
import { Container, Heading, Stack } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { projects } from '../projects/projects'
const AnimatedContainer = motion(Container)
const ProjectMenu = () => {

    
  return (
    <AnimatedContainer
     
  
    fontFamily={"poppins"} textAlign={"center"} p="5" maxW={"container.lg"}>
      <Heading my="5">PROJECTS</Heading>
    <Stack  gap="5" justify="center" direction={["column","row"]} align="center" >
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </Stack>
  </AnimatedContainer>
  )
}

export default ProjectMenu