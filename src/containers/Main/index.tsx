import React from "react";
import { Route } from "react-router-dom";

import { Flex, Box } from "@chakra-ui/react";

import Inbox from "./Inbox";
import Message from "./Message";

import LeftNavbar from "../../components/navigation/LeftNavbar";

export default function ({ match }: any) {
  function getRandomBackgroundImg() {
    const bgImages: string[] = [
      //"https://www.transparenttextures.com/patterns/woven.png",
      //"https://www.transparenttextures.com/patterns/white-brick-wall.png",x
      //"https://www.transparenttextures.com/patterns/washi.png",x
      //"https://www.transparenttextures.com/patterns/vintage-speckles.png",
      "https://www.transparenttextures.com/patterns/swirl.png"
    ];
    const min = 0;
    const max = bgImages.length - 1;
    return bgImages[Math.floor(Math.random() * (max - min + 1)) + min];
  }
  return (
    <React.Fragment>
      <Flex
        backgroundImage={'url("' + getRandomBackgroundImg() + '")'}
        backgroundColor="background"
        height="100vh"
        overflow="hidden"
      >
        <Box flex={1} px={4}>
          <LeftNavbar />
        </Box>
        <Box flex={4.5}>
          <Box
            bg="white"
            height="100vh"
            borderTopLeftRadius="40px"
            borderBottomLeftRadius="40px"
            overflowY="auto"
            py={6}
            px={12}
          >
            <Route path="/archived" component={Inbox} />
            <Route path="/inbox" component={Message} />
            {/* NOTE: Boipelo temporarily replaced this code to test routing */}
            {/* <Route path={`${match?.path}/inbox`} component={Inbox} />
            <Route path={`${match?.path}/messages`} component={Message} /> */}
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
