import React from "react";
import { Line } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { Box, Heading, Text } from "@chakra-ui/react";

const LineChart = ({ data, aspectRatio }) => {
  return (
    <Box marginTop={"1.3rem"}>
      <Text
        fontSize={"1.5rem"}
        textAlign={"left"}
        fontWeight={"bold"}
        color={"#250038"}
      >
        Line Charts Data
      </Text>
      <Box marginTop={"1.3rem"}>
        <Line
          data={data}
          options={{ aspectRatio: aspectRatio, responsive: true }}
        />
      </Box>
    </Box>
  );
};

export default LineChart;
