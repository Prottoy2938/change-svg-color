import React from "react";
import {
  Box,
  Heading,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  AlertDescription,
  Text,
  IconButton,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  Kbd,
} from "@chakra-ui/core";
import { Props } from "./css-filter-output.model";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { v4 as uuid } from "uuid";
import { InfoIcon } from "@chakra-ui/icons";

const CSSFilterOutput: React.FC<Props> = (props: Props) => {
  const { cssFilterValue } = props;
  const toast = useToast();
  const handleCopyClick = (): void => {
    toast({
      position: "bottom-right",
      isClosable: true,
      duration: 5000,
      // eslint-disable-next-line react/display-name
      render: ({ onClose }: any) => (
        <Alert status="success">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Copied</AlertTitle>
            <AlertDescription display="block" mt={6}>
              <Text mb={3}>Copied to clipboard</Text>
            </AlertDescription>
          </Box>
          <CloseButton
            onClick={onClose}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      ),
    });
  };

  return (
    <Box m="0 auto" mt={16} mb={20} width="500px">
      <Stack isInline>
        {" "}
        <Heading flex={1} as="h4" size="md" mb={5}>
          CSS Filter Output
        </Heading>
        <Popover>
          <PopoverTrigger>
            <Box>
              <Tooltip
                label="how to use css filter"
                aria-label="how to use css filter"
              >
                <IconButton
                  bg="white"
                  aria-label="how to use css filter"
                  icon={<InfoIcon color="black" />}
                />
              </Tooltip>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>How to use CSS filter?</PopoverHeader>
            <PopoverBody>
              <Text>
                Add the <Kbd>filter</Kbd> property on the svg CSS selector.
              </Text>
              <Text mt={3}>For example:</Text>
              <Highlight
                {...defaultProps}
                theme={theme}
                code={`<img src="/profile.svg" alt="some svg" id="my-svg"/>`.trim()}
                language="jsx"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <Box
                    cursor="pointer"
                    textAlign="left"
                    margin="1em 0"
                    padding="1em 2em"
                    borderRadius="5px"
                    className={`codeContainer ${className}`}
                    style={style}
                    onClick={handleCopyClick}
                    height="70px"
                  >
                    {tokens.map((line) => (
                      <div {...getLineProps({ line })} key={uuid()}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token })} key={uuid()} />
                        ))}
                      </div>
                    ))}
                  </Box>
                )}
              </Highlight>
              <Highlight
                {...defaultProps}
                theme={theme}
                code={`#my-svg {
                  filter: invert(19%) sepia(48%) saturate(1556%) hue-rotate(223deg) brightness(91%) contrast(123%);\n\n\n
      }`.trim()}
                language="css"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <Box
                    cursor="pointer"
                    textAlign="left"
                    margin="1em 0"
                    padding="1em 2em"
                    borderRadius="5px"
                    className={`codeContainer ${className}`}
                    style={style}
                    onClick={handleCopyClick}
                    height="150px"
                  >
                    {tokens.map((line) => (
                      <div {...getLineProps({ line })} key={uuid()}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token })} key={uuid()} />
                        ))}
                      </div>
                    ))}
                  </Box>
                )}
              </Highlight>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>

      <Highlight
        {...defaultProps}
        theme={theme}
        code={cssFilterValue.trim()}
        language="css"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <CopyToClipboard text={cssFilterValue}>
            <Box
              cursor="pointer"
              textAlign="left"
              margin="1em 0"
              padding="1em 2em"
              borderRadius="5px"
              className={`codeContainer ${className}`}
              style={style}
              onClick={handleCopyClick}
              height="100px"
            >
              {tokens.map((line) => (
                <div {...getLineProps({ line })} key={uuid()}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token })} key={uuid()} />
                  ))}
                </div>
              ))}
            </Box>
          </CopyToClipboard>
        )}
      </Highlight>
    </Box>
  );
};

export default CSSFilterOutput;
