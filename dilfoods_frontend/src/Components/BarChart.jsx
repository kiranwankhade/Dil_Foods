import React from "react";
import { Bar } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { Box, Text } from "@chakra-ui/react";

const BarChart = ({ data, aspectRatio }) => {
  console.log("data:", data);

  return (
    <Box marginTop={"1.3rem"}>
      <Text
        fontSize={"1.5rem"}
        textAlign={"left"}
        fontWeight={"bold"}
        color={"#250038"}
      >
        Bar Charts Data
      </Text>
      <Box marginTop={"1.3rem"}>
        <Bar
          data={data}
          options={{ aspectRatio: aspectRatio, responsive: true }}
        />
      </Box>
    </Box>
  );
};

export default BarChart;
