import React from 'react';
import {  Box, Container, Heading,Text } from '@chakra-ui/react';
import ProjectCard from './Components/ProjectCard';
import ProjectMenu from './Components/ProjectMenu';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Header from './Components/Header';



const App = () => {
  

  return (
  <Box overflow={"hidden"} color={"#2D4356"}  bgColor={"#EEEEEE"}  w="100%" h="auto" >
    <Header />
    <Intro />
    <ProjectMenu />
    <Contact />
    <Footer />
    
    </Box>
   
  );
};

export default App;



