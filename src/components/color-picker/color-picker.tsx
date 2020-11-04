import React from "react";
import { SketchPicker, ColorResult } from "react-color";
import { Props } from "./color-picker.model";
import { Box } from "@chakra-ui/core";

const ColorPicker: React.FC<Props> = (props: Props) => {
  const { setColor, color } = props;
  const handleChange = (color: ColorResult) => {
    setColor(color.rgb);
  };
  return (
    <Box justifyContent="center" alignItems="center" m="0 auto">
      <SketchPicker color={color} onChange={handleChange} />
    </Box>
  );
};

export default ColorPicker;
