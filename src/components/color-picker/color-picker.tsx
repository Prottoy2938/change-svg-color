import React from "react";
import { SketchPicker, ColorResult } from "react-color";
import { Props } from "./color-picker.model";
import { Box, Heading } from "@chakra-ui/core";

const ColorPicker: React.FC<Props> = (props: Props) => {
  const { setColor, color } = props;
  const handleChange = (color: ColorResult) => {
    setColor(color.rgb);
  };
  return (
    <Box width="500px" m="0 auto" mt={12}>
      <Heading as="h4" size="md" mb={5}>
        Select Color
      </Heading>
      <SketchPicker
        className="sketch-picker"
        color={color}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ColorPicker;
