import React, { useState } from "react";
import { Box, Heading, Image, Button, Stack, Tooltip } from "@chakra-ui/core";
import { Props } from "./svg-change-demo.model";
import { css, jsx } from "@emotion/core";

const SVGChangeDemo: React.FC<Props> = (props: Props) => {
  const { cssFilterValue } = props;
  const [ImgURL, setImgURL] = useState("/example-demo.svg");

  const handleSvgChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImgURL(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Box m="0 auto" width="500px" mt={16}>
      <Stack isInline>
        <Heading flex={1} as="h4" size="md" mb={5}>
          Filter applied to Image (SVG preferred)
        </Heading>
        <Tooltip label="upload custom svg" aria-label="upload custom svg">
          <label htmlFor="upload-svg" id="upload-svg-label">
            upload
          </label>
        </Tooltip>

        <input
          type="file"
          accept="image/*"
          name="svg"
          id="upload-svg"
          onChange={handleSvgChange}
        />
      </Stack>

      <Image
        src={ImgURL ? ImgURL : "/example-demo.svg"}
        alt="example svg"
        css={css`
          ${cssFilterValue}
        `}
        maxHeight="350px"
        maxWidth="350px"
      />
    </Box>
  );
};

export default SVGChangeDemo;
