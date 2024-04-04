import { Box, CircularProgress, CircularProgressLabel, Flex, Progress, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const StasticsCards = (props) => {
  const { title, stat, icon,progress,color } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 1 }}>
          <StatLabel fontWeight={"medium"} isTruncated  color="#46b6e2">
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"} textAlign={"left"}>
            {stat}
          </StatNumber>
          
        </Box>
         
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>

        <Box >
        {progress !== undefined && (
              <CircularProgress size='60px'  thickness='7px'  value={progress.toFixed(1)/100 * 10}  color={color || "teal"}>
                <CircularProgressLabel fontSize="0.75rem">{(progress.toFixed(1)/100 * 10).toFixed(2)}%</CircularProgressLabel> 
              </CircularProgress>
          )}
        </Box>
      </Flex>
    </Stat>
  );
};

export default StasticsCards;