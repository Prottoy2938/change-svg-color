import React from "react";
import { Box, Kbd, Text } from "@chakra-ui/core";

const AppDescription: React.FC = () => {
  return (
    <Box>
      <Text>
        The <Kbd>filter</Kbd> CSS property applies graphical effects like blur
        or color shift to an element. Filters are commonly used to adjust the
        rendering of images, backgrounds, and borders.
      </Text>
    </Box>
  );
};

export default AppDescription;
