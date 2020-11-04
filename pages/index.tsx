import Head from "next/head";
import { Box, Heading } from "@chakra-ui/core";
import ColorPicker from "../src/components/color-picker/color-picker";
import React, { useState } from "react";
import { Color } from "react-color";

const defaultColor = {
  r: 38,
  g: 23,
  b: 112,
  a: 1,
};

const Home: React.FC = () => {
  const [color, setColor] = useState<Color>(defaultColor);
  return (
    <>
      <Head>
        <title>Color to CSS Filter</title>
      </Head>
      <Heading textAlign="center">Color to CSS Filter</Heading>
      <Box justifyContent="center" alignItems="center" m="0 auto">
        <ColorPicker setColor={setColor} color={color} />
      </Box>
    </>
  );
};

export default Home;
