import React from "react";

import { Spacer, Avatar, Circle, Text, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LibraryAdd as LibraryAddIcon } from "@material-ui/icons";
import chats from "../../../chats";

import Message from "../../../components/Mesage";

export default function () {
  const renderProfile = () => (
    <Spacer textAlign="right">
      <LibraryAddIcon style={{ color: "#84cea3" }} />
      <Text mx={1} display="inline-block">
        Add a Listing
      </Text>
      <Circle
        mx={1}
        display="inline-block"
        size="40px"
        p="2px"
        borderWidth="3px"
        borderColor="#000"
      >
        <Avatar size="40px" />
      </Circle>
      <ChevronDownIcon color="accent" />
    </Spacer>
  );

  return (
    <React.Fragment>
      {renderProfile()}

      <Text fontSize="sm" color="primary">
        Messages
      </Text>
      <Text fontSize="3xl" mb={4} fontWeight="600">
        Inbox
      </Text>

      <hr />

      {chats.map((chat) => {
        return (
          <Message
            name={chat.user.name}
            image={chat.user.profileImg}
            online={chat.user.isOnline}
            time={chat.lastMessage.timeOfMessage}
            message={chat.lastMessage.text}
            received={chat.lastMessage.receivedNotSent}
            unread={chat.unread}
          />
        );
      })}
    </React.Fragment>
  );
}
