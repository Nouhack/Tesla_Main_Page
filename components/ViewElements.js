import React, { useState } from "react";
import { Center, VStack, Flex, Text, Button, Stack } from "@chakra-ui/react";
import styles from "../styles/index.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewElements(props) {
  const pp = React.createRef();
  const [showContent, setshowContent] = useState(false);

  return (
    <div
      ref={pp}
      style={{
        //  backgroundColor: "red",
        height: "100vh",
        scrollSnapAlign: "start",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <Image
          onLoad={() => setshowContent(true)}
          //   priority={true}
          alt="Mountains"
          src={props.imagename}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {showContent && (
        <>
          {props.children}
          <Flex
            maxH="100%"
            h="92vh"
            w="100%"
            // bg="red"
            direction="column"
            // style={{ borderBottom: "2px solid black" }}
          >
            <Center w="100%" h="30%" textAlign="center">
              {" "}
              <VStack
                w="100%"
                h="100%"
                spacing={100}
                //  bg="black"
                justifyContent="center"
              >
                <motion.div
                  style={{
                    position: "fixed",
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Text
                    fontSize={{ base: "24px", md: "30px", lg: "40px" }}
                    opacity={props.opac}
                    //  fontSize="40px"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="bold"
                    color="#393c41"
                  >
                    {props.title}
                  </Text>
                </motion.div>
                <motion.div
                  style={{ position: "fixed" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    color="grey"
                    fontWeight="normal"
                    fontFamily="Montserrat, sans-serif"
                    opacity={props.opac}
                  >
                    {" "}
                    Order Online for{" "}
                    <a
                      style={{
                        color: "#3d4046",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                      href="https://github.com/Nouhack"
                      target="_blank"
                    >
                      Touchless Delivery
                    </a>{" "}
                  </Text>
                </motion.div>
              </VStack>
            </Center>
            <Flex
              w="100%"
              //  bg="yellow"
              h="70%"
              alignItems="flex-end"
              justifyContent="center"
              pb={25}
            >
              {" "}
              <Stack
                spacing={7}
                direction={{ base: "column", md: "row" }}
                mb={14}
                pos="fixed"
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <Button
                    bg="#3a3c40"
                    color="white"
                    _hover={{ bg: "#3a3c40" }}
                    rounded={25}
                    w="250px"
                    fontWeight="normal"
                    fontFamily="Montserrat, sans-serif"
                    opacity={props.opac}
                  >
                    {" "}
                    Custom Order
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <Button
                    opacity={props.opac}
                    rounded={25}
                    w="250px"
                    fontWeight="normal"
                    fontFamily="Montserrat, sans-serif"
                  >
                    {" "}
                    Existing Inventory
                  </Button>
                </motion.div>
              </Stack>
              {props.showArrow && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  mb={0}
                  className={`${styles.arrow} ${styles.bounce}`}
                  style={{ opacity: props.opac }}
                ></motion.div>
              )}
            </Flex>
          </Flex>
        </>
      )}
    </div>
  );
}

/*styles.arrow, styles.bounce
 <Center w="100%" h="92vh" mt={13} textAlign="center">
        <VStack h="100%" spacing={16} mt={10}>
          <Text
            fontSize="40px"
            fontFamily="Montserrat, sans-serif"
            fontWeight="bold"
            pos="fixed"
            color="#393c41"
          >
            Model S
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="grey"
            pos="fixed"
            fontWeight="normal"
            fontFamily="Montserrat, sans-serif"
          >
            {" "}
            Order Online for{" "}
            <a
              style={{
                color: "#3d4046",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="www.google.com"
            >
              Touchless Delivery
            </a>{" "}
          </Text>
          <Spacer />
          <Box bg="red" pos="fixed">
            nouh
          </Box>
        </VStack>
        </Center>
*/
