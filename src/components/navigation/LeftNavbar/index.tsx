import React from "react";
import { useHistory } from "react-router-dom";

import { Accordion, Circle, Image, Text, Box, Button } from "@chakra-ui/react";
import MenuButton from "../../MenuButton";
import {
  List as ListIcon,
  Forum as ForumIcon,
  Apps as AppsIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  Loop as LoopIcon
} from "@material-ui/icons";

function LeftNavbar() {
  const history = useHistory();
  return (
    <React.Fragment>
      <Box overflowY="auto" className="lnav" height="100vh">
        <Accordion allowMultiple defaultIndex={1}>
          <Image
            src="https://filmspace.co.za/images/white_logo.svg"
            w="70%"
            mr={0}
            mb={8}
            mt={4}
          />

          <Text textTransform="capitalize" color="white">
            My filmspace
          </Text>

          <MenuButton
            bg="white"
            caption="Bookings"
            icon={<ListIcon style={{ fontSize: "20px" }} />}
          />
          <MenuButton
            bg="white"
            caption="Messages"
            icon={<ForumIcon style={{ fontSize: "20px" }} />}
            subMenuItems={[
              { label: "Inbox", route: "/inbox", notifications: 3 },
              { label: "Archived", route: "/archived" }
            ]}
          />

          <MenuButton
            bg="white"
            caption="My Listings"
            icon={<AppsIcon style={{ fontSize: "20px" }} />}
          />

          <Text textTransform="capitalize" color="white" mt={6}>
            My Account
          </Text>

          <MenuButton
            bg="white"
            caption="Account Settings"
            icon={<SettingsIcon style={{ fontSize: "20px" }} />}
          />
          <MenuButton
            bg="white"
            caption="My Profile"
            icon={<AccountCircleIcon style={{ fontSize: "20px" }} />}
          />
          <MenuButton
            bg="white"
            caption="Switch to Filmmaker"
            icon={<LoopIcon style={{ fontSize: "20px" }} />}
          />
          <Box minHeight="0px" height="24px" />
          <Button
            textTransform="capitalize"
            bg="primary"
            color="white"
            w="100%"
            p={3}
          >
            <Text fontSize="14px">ADD A LISTING</Text>
          </Button>
          <Button
            textTransform="capitalize"
            bg="accent"
            color="white"
            w="100%"
            mt={2}
            p={3}
            mb={2}
            onClick={() => {
              history.replace("/login");
            }}
          >
            <Text fontSize="14px">LOGOUT</Text>
          </Button>
        </Accordion>
      </Box>
    </React.Fragment>
  );
}

export default LeftNavbar;
