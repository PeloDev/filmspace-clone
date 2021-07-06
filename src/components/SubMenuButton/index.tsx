import React from "react";

import { AccordionPanel, Center, Circle, Text } from "@chakra-ui/react";
import { SubdirectoryArrowRight as SubdirectoryArrowRightIcon } from "@material-ui/icons";

interface IProps {
  label: string;
  handleClick: Function;
  isSelected?: boolean;
  notifications?: number;
}

export default function ({
  label,
  handleClick,
  isSelected = false,
  notifications = 0
}: IProps) {
  return (
    <AccordionPanel px={3} py={2}>
      {isSelected ? (
        <SubdirectoryArrowRightIcon
          style={{ fontSize: 14, color: "#FFBF17" }}
        />
      ) : null}
      <Text
        display="inline-block"
        cursor="pointer"
        onClick={() => handleClick()}
        color={isSelected ? "accent" : "white"}
        fontSize="14px"
      >
        {label}
      </Text>
      {notifications > 0 ? (
        <Center
          mt={1}
          float="right"
          pr={1}
          textAlign="right"
          display="inline-block"
        >
          <Circle
            fontSize="13px"
            fontWeight="500"
            width="18px"
            height="18px"
            bg="white"
            color="#000"
          >
            {notifications}
          </Circle>
        </Center>
      ) : null}
    </AccordionPanel>
  );
}
