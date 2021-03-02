import React from "react";
import Header from "../components/Header";
import ViewElements from "../components/ViewElements";
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
export default function Home() {
  const pp = React.createRef();
  const [title, settitle] = useState("Model S");
  const [position, setposition] = useState(0);
  const [opac, setopac] = useState(1);
  const [showArrow, setshowArrow] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  /*
  useEffect(() => {
    effect
    
  }, [position])
*/

  const changeTitle = (pos) => {
    console.log("hadi position : ", window.innerHeight - pos * 3);

    if (
      parseInt(pos) <
      parseInt(window.innerHeight) - parseInt(window.innerHeight) / 3
    ) {
      setshowArrow(true);
      settitle("Model S");
      setopac((window.innerHeight - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 2 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Model Y");
      setshowArrow(false);
      setopac((window.innerHeight * 4 - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 3 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Model 3");
      setshowArrow(false);

      setopac((window.innerHeight * 7 - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 4 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Model X");
      setshowArrow(false);

      setopac((window.innerHeight * 10 - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 5 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Lowest Cost Solar Panels in America");
      setshowArrow(false);

      setopac((window.innerHeight * 13 - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 6 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Solar for New Roofs");
      setshowArrow(false);

      setopac((window.innerHeight * 16 - pos * 3) / window.innerHeight);
    } else if (
      parseInt(pos) <
      parseInt(window.innerHeight) * 7 - parseInt(window.innerHeight) / 3
    ) {
      settitle("Accessories");
      setshowArrow(false);

      setopac((window.innerHeight * 19 - pos * 3) / window.innerHeight);
    }
  };

  return (
    <div
      onScroll={() => changeTitle(pp.current.scrollTop)}
      ref={pp}
      style={{
        position: "relative",
        scrollSnapType: "y mandatory",
        maxHeight: "100vh",
        overflowY: "scroll",
        width: "calc(100vw - (100vw - 100%))",
      }}
    >
      <ViewElements
        imagename="/car1.jpg"
        title={title}
        opac={opac}
        showArrow={showArrow}
      >
        <Header reference={btnRef} func={onOpen} />
      </ViewElements>

      <ViewElements imagename="/car2.jpg" title={title} />
      <ViewElements imagename="/car3.jpg" title={title} />
      <ViewElements imagename="/car4.jpg" title={title} />
      <ViewElements imagename="/house.jpg" title={title} />
      <ViewElements imagename="/house2.jpg" title={title} />
      <ViewElements imagename="/headset.jpg" title={title} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
}
