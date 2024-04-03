import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { calculateData } from "../CommonFunctions/CalculateData";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { LuUsers } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import { GiReceiveMoney } from "react-icons/gi";
import { generateRandomColorArray } from "../CommonFunctions/ColorRandom";
import StasticsCards from "./StasticsCards";
import DoughnutCharts from "./DoughnutCharts";

const Home = ({ chartData, bestSelling }) => {
  const metrics = calculateData(chartData);
  const pieChartData = {
    labels: chartData?.map((data) => data.month),
    datasets: [
      {
        label: "Total Sales",
        data: chartData?.map((data) => data.sales),
        backgroundColor: generateRandomColorArray(),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const bestSellingProduct = {
    labels: bestSelling?.map((data) => data.name),
    datasets: [
      {
        label: "Total Sales",
        data: bestSelling?.map((data) => data.salesCount),
        backgroundColor: generateRandomColorArray(),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const lineChartData = {
    labels: chartData?.map((data) => data.month),
    datasets: [
      {
        label: "Total Revenue",
        data: chartData?.map((data) => data.revenue),
        backgroundColor: generateRandomColorArray(),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: chartData?.map((data) => data.month),
    datasets: [
      {
        label: "Total Users Active",
        data: chartData?.map((data) => data.userActivity),
        backgroundColor: generateRandomColorArray(),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <SimpleGrid
        mt="26px"
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 4, lg: 8 }}
      >
        <StasticsCards
          title={"Total Users Visited"}
          stat={metrics.totalUsers}
          icon={<LuUsers size={"2em"} color="#e81e3e" />}
        />
        <StasticsCards
          title={"Total Revenue"}
          stat={" $ " + metrics.totalRevenue}
          icon={<GiReceiveMoney size={"2em"} />}
        />
        <StasticsCards
          title={"Total Sales"}
          stat={metrics.totalSales}
          icon={<FcSalesPerformance size={"2em"} />}
        />
      </SimpleGrid>
      <SimpleGrid
        my="16px"
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 4, lg: 8 }}
      >
        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          borderRadius={"12px"}
          p="12px"
        >
          <BarChart data={barChartData} aspectRatio={1 / 1} />
        </Box>
        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          borderRadius={"12px"}
          p="12px"
        >
          <LineChart data={lineChartData} aspectRatio={1 / 1} />
        </Box>

        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={"12px"}
          borderRadius={"12px"}
        >
          <DoughnutCharts data={pieChartData} aspectRatio={1 / 1} />
        </Box>
      </SimpleGrid>

      <Flex my="12px" gap="16px" direction={{ base: "column", lg: "row" }}>
        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={"12px"}
          borderRadius={"12px"}
          w={{ base: "100%", lg: "40%" }}
        >
          <PieChart data={bestSellingProduct} />
        </Box>
        <Box
          w={{ base: "100%", lg: "58%" }}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={"12px"}
          borderRadius={"12px"}
        >
          <SimpleGrid mt="16px" rows={1} spacing={{ base: 4, lg: 8 }}>
            <StasticsCards
              title={"Average Users Visited"}
              stat={Math.floor(metrics.averageUsersPerMonth)}
              icon={<LuUsers size={"3em"} color="#e81e3e" />}
            />
            <StasticsCards
              title={"Average Sales"}
              stat={Math.floor(metrics.averageSalePerMonth)}
              icon={<FcSalesPerformance size={"3em"} />}
            />
            <StasticsCards
              title={"Average Revenue"}
              stat={" $ " + Math.floor(metrics.averageRevenuePerMonth)}
              icon={<GiReceiveMoney size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
