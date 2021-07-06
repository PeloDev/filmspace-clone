import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'

import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  Center,
  Circle,
  Text
} from "@chakra-ui/react";
import SubMenuButton from "../SubMenuButton";

interface SubMenuItemKeys {
  label: string;
  route?: string;
  notifications?: number;
}

interface IProps {
  bg?: string;
  color?: string;
  caption: string;
  icon?: any;
  subMenuItems?: SubMenuItemKeys[];
}

export default function ({ bg, color, caption, icon, subMenuItems }: IProps) {
  const history = useHistory();
  const location = useLocation();

  const [menuIdx, setMenuIdx] = useState(-1);
  function selectSubMenu(idx: number) {
    setMenuIdx(idx);
  }

  function hasNotification() {
    var hasNotification = false;
    subMenuItems?.forEach((item) => {
      if (item.notifications) {
        hasNotification = true;
      }
    });
    return hasNotification;
  }

  return (
    <Box my={2}>
      <AccordionItem borderRadius="5px" border="none" color={color}>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              p="10px" // remove : smaller buttons
              bg={bg}
              borderRadius="5px"
              _hover={{}}
              _focus={{ border: "none" }}
              _expanded={{ bg: "#44A680", color: "white", borderRadius: "5px" }}
            >
              <Box flex="1" textAlign="left">
                <Center mx="5px" display="inline-block">
                  {icon}
                </Center>
                <Box ml="5px" display="inline-block">
                  <Text
                    fontWeight="600"
                    fontSize={"14px" /* remove: fontSize smaller buttons */}
                  >
                    {caption}
                  </Text>
                </Box>
                {hasNotification() && (
                  <Center
                    float="right"
                    pr={1}
                    mt={2}
                    textAlign="right"
                    display="inline-block"
                  >
                    <Circle
                      width="10px"
                      height="10px"
                      bg="#ff0000"
                      borderWidth="2px"
                      borderColor="white"
                      color="#000"
                    ></Circle>
                  </Center>
                )}
              </Box>
              <AccordionIcon color={isExpanded ? "white" : "primary"} />
              {/* {isExpanded ? (
                <ChevronUpIcon fontSize="14px" />
              ) : (
                <ChevronDownIcon fontSize="14px" />
              )} */}
            </AccordionButton>

            {subMenuItems?.map((item, index) => {
              if (index !== menuIdx && item.route !=null && location.pathname.includes(item.route)) {
                setMenuIdx(index);
              }
              var isSelected: boolean = index === menuIdx;
              return (
                <SubMenuButton
                  label={item.label}
                  isSelected={isSelected}
                  notifications={item.notifications}
                  handleClick={() => {
                    selectSubMenu(index);
                    if (item.route) {
                      console.log("Changing route to [" + item.route + "]");
                      history.push(item.route);
                    }
                  }}
                />
              );
            })}
          </>
        )}
      </AccordionItem>
    </Box>
  );
}
