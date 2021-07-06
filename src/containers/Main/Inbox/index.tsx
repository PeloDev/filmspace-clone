import React from "react";

import { Avatar, Center, Circle, Spacer, Text, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LibraryAdd as LibraryAddIcon } from "@material-ui/icons";

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
        Archived
      </Text>

      <hr />

      <Box
        border="1px solid #eae8e8"
        p={4}
        textAlign="center"
        borderRadius="sm"
      >
        <Text color="primaryDark" my={5}>
          You've got mail!
        </Text>
        <hr />
        <Text my={5}>
          Well not right now, but soon! Keep your eyes peeled for new messages
          from interested filmmakers
        </Text>
        <Center py={3}>
          <img
            width="36px"
            style={{ margin: "0px 2px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/party-popper_1f389.png"
            alt="dancing-man-emoji"
          />
          <img
            width="60px"
            style={{ margin: "0px 2px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/woman-dancing_medium-dark-skin-tone_1f483-1f3fe_1f3fe.png"
            alt="dancing-lady-emoji"
          />
          <img
            width="60px"
            style={{ margin: "0px 2px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/man-dancing_1f57a.png"
            alt="dancing-man-emoji"
          />
          <img
            width="36px"
            style={{ margin: "0px 2px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/party-popper_1f389.png"
            alt="dancing-man-emoji"
          />
        </Center>
      </Box>
    </React.Fragment>
  );
}
