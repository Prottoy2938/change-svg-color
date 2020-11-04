import React from "react";
import {
  Box,
  Kbd,
  Text,
  Heading,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

const AppDescription: React.FC = () => {
  return (
    <Box width="600px" m="0 auto" mt={10}>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What's CSS Filter
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text lineHeight={7}>
              The <Kbd>filter</Kbd> CSS property applies graphical effects like
              blur or color shift to an element. Filters are commonly used to
              adjust the rendering of images, backgrounds, and borders.
              <br />
              More info about this on{" "}
              <Link
                title="CSS filter on MDN"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
                color="purple"
                textDecor="underline"
              >
                MDN
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AppDescription;
