import { Center, HStack, Box, Spacer, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header(props) {
  return (
    <Box h="8vh" p={3} pos="relative">
      <Flex h="100%" alignItems="center">
        <Flex
          pos="fixed"
          h="8vh"
          p="4"
          //   bg="blue.400"
          w="35%"
          alignItems="center"
          justifyContent="flex-start"
        >
          <img src="./logo.svg" width="105px" alt="" />
        </Flex>

        <Center
          p="4"
          w="100%"
          h="8vh"
          pos="fixed"
          display={{ base: "none", lg: "inherit" }}
        >
          <HStack spacing={5}>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              MODEL S
            </Text>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              MODEL 3
            </Text>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              MODEL X
            </Text>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              MODEL Y
            </Text>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              SOLAR ROOF
            </Text>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
            >
              SOLAR PANELS
            </Text>
          </HStack>
        </Center>
        <Spacer />
        <Flex
          pos="relative"
          //   bg="green.400"
          w="35%"
          h="8vh"
          alignItems="center"
          justifyContent="flex-end"
        >
          <HStack pos="fixed" spacing={5}>
            <Text
              color="black"
              fontSize={14}
              fontFamily="Montserrat, sans-serif"
              fontWeight="bold"
              display={{ base: "none", lg: "inherit" }}
            >
              SHOP
            </Text>
            <Center display={{ base: "none", lg: "inherit" }}>
              <Text
                color="black"
                fontSize={14}
                fontFamily="Montserrat, sans-serif"
                fontWeight="bold"
              >
                TESLA ACCOUNT
              </Text>{" "}
            </Center>
            <HamburgerIcon
              ref={props.reference}
              onClick={props.func}
              color="black"
              fontWeight="bold"
              fontSize={25}
            />{" "}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

/*
 <HStack spacing="24px" h="50px">
      <Box w="30%">
        <img src="./logo.svg" width="120px" alt="" />
      </Box>

      <Center w="60%">
        <Text p={10}>MODEL S</Text>
        <Text p={10}>MODEL 3</Text>
        <Text p={10}>MODEL X</Text>
        <Text p={10}>MODEL Y</Text>
        <Text p={10}>SOLAR ROOF</Text>
        <Text p={10}>SOLAR PANELS</Text>
      </Center>
      <Flex
        pr={10}
        w="30%"
        //   bg="blue"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Text p={10}>SHOP</Text>
        <Text p={10}>TESLA ACCOUNTS</Text>
        <HamburgerIcon p={10} w={20} h={20} />
      </Flex>
    </HStack>

*/
