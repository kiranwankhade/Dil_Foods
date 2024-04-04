import React, { useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Button,
  Image,
  useBreakpointValue,
  Select,
  Heading,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestSelling,
  getProductData,
} from "../Redux/chartdata/chartdata.actions";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Home from "./Home";
import { generateRandomColor } from "../CommonFunctions/ColorRandom";
import DoughnutCharts from "./DoughnutCharts";
import { BiSolidDoughnutChart } from "react-icons/bi";
import SkeletonHtml from "./SkeletonHtml";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "home" },
  { name: "Pie Charts", icon: FaChartPie, link: "pieChart" },
  { name: "Line Charts", icon: FaChartLine, link: "lineChart" },
  { name: "Bar Charts", icon: FaChartBar, link: "barChart" },
  {
    name: "Doughnut Charts",
    icon: BiSolidDoughnutChart,
    link: "doughnutChart",
  },
];


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Box  display={{ base: 'flex', md: 'none' }}> */}
        <Image
          w={"50%"}
          h="100%"
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="Logo"
        />
        {/* </Box> */}
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        // <Link to={link.link}>
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
        // </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, link, ...rest }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Box
        as="a"
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 3, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: "flex", md: "none" }}>
        <Image
          w={"80%"}
          h="100px"
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="Logo"
        />
      </Box>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Kiran Wankhade</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [year, setCurrentYear] = useState(searchParams.get("year") || "2020");

  const { loading, chartData, bestSelling } = useSelector(
    (store) => store.chartData
  );

  const isMobile = useBreakpointValue({ base: true, sm: false });

  useEffect(() => {
    dispatch(getProductData(year));
    dispatch(getBestSelling(year));
  }, [year]);

  const [salesData, setSalesData] = useState({
    labels: chartData?.map((data) => data.month),
    datasets: [
      {
        label: "Total Sales",
        data: chartData?.map((data) => data.sales),
        backgroundColor: generateRandomColor(),
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Revenue",
        data: chartData?.map((data) => data.revenue),
        backgroundColor: generateRandomColor(),
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total Users Active",
        data: chartData?.map((data) => data.userActivity),
        backgroundColor: generateRandomColor(),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setSalesData({
      labels: chartData?.map((data) => data.month),
      datasets: [
        {
          label: "Total Revenue",
          data: chartData?.map((data) => data.revenue),
          backgroundColor: generateRandomColor(),
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Total Users Active",
          data: chartData?.map((data) => data.userActivity),
          backgroundColor: generateRandomColor(),
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Total Sales",
          data: chartData?.map((data) => data.sales),
          backgroundColor: generateRandomColor(),
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [chartData]);

  useEffect(() => {
    setCurrentYear(searchParams.get("year") || "2020");
  }, [searchParams]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Flex
          direction={{ base: "column", lg: "row" }}
          cursor="pointer"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            color="#e81e3e"
            fontWeight="bold"
            mb={{ base: 4, lg: 0 }}
            w={'100%'}
            textAlign={{ base: "center", lg: "left" }}
          >
            Admin Dashboard
          </Heading>

          <Flex
            w={"100%"}
            maxWidth="100%"
            justifyContent={{ base: "center", lg: "flex-end" }}
            alignItems="center"
            gap="12px"
          >
            <Text color="#e81e3e" fontWeight="bold" whiteSpace="nowrap">
              Select Year:
            </Text>
            <Select
              value={year}
              border="1px solid grey"
              onChange={(e) => setSearchParams({ year: e.target.value })}
              w="auto"
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </Select>
          </Flex>
        </Flex>

        {loading ? (
          <SkeletonHtml />
        ) : (
          <>
            {window.location.pathname.includes("barChart") ? (
              isMobile ? (
                <BarChart data={salesData} aspectRatio={1 / 0.72} />
              ) : (
                <BarChart data={salesData} aspectRatio={1 / 0.4} />
              )
            ) : window.location.pathname.includes("lineChart") ? (
              isMobile ? (
                <LineChart data={salesData} aspectRatio={1 / 0.72} />
              ) : (
                <LineChart data={salesData} aspectRatio={1 / 0.4} />
              )
            ) : window.location.pathname.includes("doughnutChart") ? (
              isMobile ? (
                <DoughnutCharts data={salesData} aspectRatio={1 / 0.72} />
              ) : (
                <DoughnutCharts data={salesData} aspectRatio={1 / 0.4} />
              )
            ) : window.location.pathname.includes("pieChart") ? (
              <Flex maxH={{ md: "75vh" }} justifyContent={"center"}>
                <PieChart data={salesData} />
              </Flex>
            ) : (
              <Home chartData={chartData} bestSelling={bestSelling} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
