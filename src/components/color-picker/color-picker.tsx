import React from "react";
import { SketchPicker, ColorResult } from "react-color";
import { Props } from "./color-picker.model";

const ColorPicker: React.FC<Props> = (props: Props) => {
  const { setColor, color } = props;
  const handleChange = (color: ColorResult) => {
    setColor(color.rgb);
  };
  return <SketchPicker color={color} onChange={handleChange} />;
};

export default ColorPicker;
