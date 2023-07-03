import React from "react";
import { Box, Image, Heading, Text, Badge, VStack,HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import github1 from "../assets/github1.png"
import link1 from "../assets/link1.png"
const AnimatedContainer = motion(Box);
const ProjectCard = ({ imageSrc, title, skills,github,live }) => {

  return (
    <AnimatedContainer

    w="full"
  className={"shadow1"}
    initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
       
      fontFamily={"poppins"}
      borderRadius="lg"
      
      boxShadow="md"
    >
      <Image
      w="full"
        borderBottom={"2px solid black"}
        src={imageSrc}
        alt={title}
        borderRadius="lg"
      />

      <VStack fontFamily={""} p="2">
        <Heading alignSelf={"flex-start"} as="h3" size="md" mb={1}>
          {title}
        </Heading>

        <Box alignSelf={"flex-start"}>
          {skills.map((skill, index) => (
            <Badge colorScheme="telegram" key={index} variant="outline" mr={1}>
              {skill}
            </Badge>
          ))}
        </Box>
        <HStack justifyContent={"space-evenly"} w="60%" >
         <a target="_blank" href={live}>
         <Image src={link1} w={5} h={5} />
         
         </a>
         <a target="_blank" href={github}>
         <Image src={github1} w={5} h={5} />
         
         </a>
        </HStack>
      </VStack>
    </AnimatedContainer>
  );
};

export default ProjectCard;
