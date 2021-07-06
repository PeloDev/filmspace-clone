import React from "react";

import {
  Spacer,
  Avatar,
  Center,
  Circle,
  Text,
  Box,
  Flex
} from "@chakra-ui/react";
import { ReplyAll as ReplyAllIcon } from "@material-ui/icons";

interface IProps {
  name: string;
  time: Date;
  image: string;
  message: string;
  received: boolean;
  online: boolean;
  unread: number;
}

export default function ({
  name,
  time,
  image,
  message,
  received,
  online,
  unread
}: IProps) {
  function getTimeText(t: Date) {
    var d = new Date();
    var hours = Number(d.getHours()) - Number(t.getHours());
    if (hours < 3 && hours > 0) {
      return hours + "h ago";
    } else {
      if (Number(t.getMilliseconds()) < Number(d.getMilliseconds())) {
        var yesterdayHrs: number = 24 - Number(t.getHours());
        var ysDayHrsStr: string =
          yesterdayHrs === 24 ? "00" : "" + yesterdayHrs;
        return ysDayHrsStr + ":" + t.getMinutes();
      } else {
        return t.getHours() + ":" + t.getMinutes();
      }
    }
  }
  console.log("timeOfMessage: " + time);
  console.log("timeText: " + getTimeText(time));

  return (
    <React.Fragment>
      <Box
        h="auto"
        border="1px solid #DDD"
        borderRadius="5px"
        boxShadow="md"
        my={5}
        py={4}
        px={8}
      >
        <Flex>
          <Center flex={1} justifyContent="left" my={4}>
            <Box display="inline-block" mb="-72px">
              <Avatar src={image} w="72px" h="72px" />
              <Box
                w="72px"
                h="72px"
                position="relative"
                //bg="#123456"
                top="-72px"
              >
                <Circle
                  position="relative"
                  bg={online ? "#00BB00" : "#BBB"}
                  border="2px solid #FFF"
                  w="16px"
                  h="16px"
                />
              </Box>
            </Box>
            <Box ml={2} display="inline-block">
              <Text fontWeight="700">{name}</Text>
              <Text fontWeight="500" color={online ? "#00BB00" : "#AAA"}>
                {online ? "Online" : "Offline"}
              </Text>
            </Box>
          </Center>
          <Box flex={1} position="relative">
            <Box float="right">
              <Text m={2} fontWeight="500" color="#888" textAlign="right">
                {getTimeText(time)}
              </Text>
              {unread > 0 && (
                <Center>
                  <Text
                    display="inline-block"
                    mx={2}
                    color="#EF4499"
                    fontSize="12px"
                    fontWeight="600"
                  >
                    NEW MESSAGE
                  </Text>
                  <Circle
                    mx={2}
                    display="inline-block"
                    bg="#EF4499"
                    textAlign="center"
                    pt="1px"
                    size="32px"
                  >
                    <Text fontSize="18px" fontWeight="500" color="#FFF">
                      {unread}
                    </Text>
                  </Circle>
                </Center>
              )}
            </Box>
          </Box>
        </Flex>
        <Box>
          <hr />
        </Box>
        <Center h="100px" justifyContent="left">
          {!received && <ReplyAllIcon style={{ marginRight: "4px" }} />}
          <Text my="auto" verticalAlign="center" fontWeight="600">
            {message}
          </Text>
        </Center>
      </Box>
    </React.Fragment>
  );
}
