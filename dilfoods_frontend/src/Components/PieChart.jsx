import React from "react";
import { Pie } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { Box, Flex, Text } from "@chakra-ui/react";

const PieChart = ({ data, aspectRatio }) => {
  return (
    <Box marginTop={"1.3rem"} textAlign={'left'}>
      <Text
        fontSize={"1.5rem"}
        textAlign={"left"}
        fontWeight={"bold"}
        color={"#250038"}
      >
        Pie Charts Data
      </Text>
      <Box marginTop={"1.3rem"} >
        <Pie
          data={data}
          options={{ aspectRatio: aspectRatio, responsive: true }}
        />
      </Box>
    </Box>
  );
};

export default PieChart;
