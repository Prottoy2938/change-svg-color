import React from "react";
import {
  Box,
  Heading,
  Textarea,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  AlertDescription,
  Text,
} from "@chakra-ui/core";
import { Props } from "./css-filter-output.model";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { v4 as uuid } from "uuid";

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
      <Heading as="h4" size="md" mb={5}>
        CSS Filter Output
      </Heading>
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
