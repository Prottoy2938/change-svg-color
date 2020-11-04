import Head from "next/head";
import { Box, Heading } from "@chakra-ui/core";
import ColorPicker from "../src/components/color-picker/color-picker";
import React, { useState, useEffect } from "react";
import { Color as ColorProps } from "react-color";
import AppDescription from "../src/components/app-description/app-description";
import CSSFilterOutput from "../src/components/css-filter-output/css-filter-output";
import { Color, Solver } from "../src/algorithm/hex-to-css-filter";

const defaultColor = {
  r: 38,
  g: 23,
  b: 112,
  a: 1,
};

const Home: React.FC = () => {
  const [color, setColor] = useState<ColorProps>(defaultColor);
  const [cssFilterValue, setCssFilterValue] = useState("");

  useEffect(() => {
    const color = new Color(0, 255, 0);
    const solver = new Solver(color);
    const result = solver.solve();
    const filterCSS = result.filter;
    setCssFilterValue(filterCSS);
  }, [color]);

  return (
    <>
      <Head>
        <title>Color to CSS Filter</title>
      </Head>
      <Heading textAlign="center" as="h1" mt={2}>
        Color to CSS Filter
      </Heading>
      <Box justifyContent="center" alignItems="center" m="0 auto">
        <AppDescription />
        <ColorPicker setColor={setColor} color={color} />
        <CSSFilterOutput cssFilterValue={cssFilterValue} />
      </Box>
    </>
  );
};

export default Home;
