import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Stack,
  Tooltip,
  Kbd,
  Text,
} from "@chakra-ui/core";
import { Props } from "./svg-change-demo.model";
import { css } from "@emotion/core";

const SVGChangeDemo: React.FC<Props> = (props: Props) => {
  const { cssFilterValue, lossInfo } = props;
  const [ImgURL, setImgURL] = useState("/example-demo.svg");

  const handleSvgChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImgURL(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Box m="0 auto" width="500px" mt={16}>
      <Stack isInline>
        <Heading flex={1} as="h4" size="md" mb={5}>
          Filter applied to Image
        </Heading>
        <Tooltip label="upload custom image" aria-label="upload custom image">
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
      <Stack mt={3} isInline>
        <Stack isInline>
          <Text borderBottom="5px double blue">loss:</Text>{" "}
          <Text as="b"> {lossInfo.loss.toFixed(2)}</Text>
        </Stack>
        <Text ml={3}>{lossInfo.lossMsg}</Text>
      </Stack>
    </Box>
  );
};

export default SVGChangeDemo;
