import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";

import Chart from "chart.js/auto";

const DoughnutCharts = ({ data, aspectRatio }) => {
  return (
    <Box marginTop={"1.3rem"}>
      <Text
        fontSize={"1.5rem"}
        textAlign={"left"}
        fontWeight={"bold"}
        color={"#250038"}
      >
        Doughnut Charts Data
      </Text>
      <Box marginTop={"1.3rem"}>
        <Doughnut
          data={data}
          options={{ aspectRatio: aspectRatio, responsive: true }}
        />
      </Box>
    </Box>
  );
};

export default DoughnutCharts;
