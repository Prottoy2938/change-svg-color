import React, { useRef } from "react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  IconButton,
  Tooltip,
} from "@chakra-ui/core";
import { BsBoundingBox } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";

const DashboardDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <IconButton
        variant="outline"
        aria-label="open dashboard"
        size="sm"
        icon={<BsBoundingBox />}
        ref={btnRef}
        onClick={onOpen}
        pos="absolute"
        right={["5px", "8px", "12px", "20px"]}
        top="5px"
        color="grey"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={12}>
            <a href="https://gist.github.com/Prottoy2938/7ff636330f2eec9bfeee56a49d6471e4">
              <Button
                leftIcon={<BsCodeSlash />}
                justifyContent="space-around"
                width="100%"
                mb={6}
              >
                Converter Algorithm
              </Button>
            </a>
            <a href="https://blog.edrini.xyz/posts/change-svg-color">
              <Button
                leftIcon={<ImNewspaper />}
                justifyContent="space-around"
                width="100%"
                mb={6}
              >
                How its build
              </Button>
            </a>
            <Tooltip
              label="svesp@protonmail.com"
              aria-label="contact email: svesp@protonmail.com"
            >
              <a href="mailto:svesp@protonmail.com">
                <Button
                  leftIcon={<MdEmail />}
                  justifyContent="space-around"
                  width="100%"
                  mb={6}
                >
                  Send Feedback
                </Button>
              </a>
            </Tooltip>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardDrawer;
