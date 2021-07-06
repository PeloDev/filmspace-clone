import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

interface SubHeadingObj {
  // anonymous interface ?
  label: string;
  isActive?: boolean;
}

interface FBProps {
  heading: string;
  subHeadings: SubHeadingObj[];
}

function FooterBlock({ heading, subHeadings }: FBProps) {
  return (
    <Box display="inline-block" verticalAlign="top" mr="8%">
      <Text fontSize="16px" color="#84cea3" fontWeight="700" mb={2}>
        {heading}
      </Text>
      {subHeadings.map((sh) => (
        <Text
          color={sh.isActive === false ? "#ccc" : "#000"}
          fontSize="13px"
          fontWeight="700"
          py="6px"
        >
          {sh.label}
        </Text>
      ))}
    </Box>
  );
}

export default function () {
  return (
    <footer>
      <Box
        py={8}
        px={8}
        borderTop="2px solid #e6f5ec"
        borderBottom="4px solid #84cea3"
        bg="url(https://filmspace.co.za/images/footer-watermark.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="83% 100%"
        backgroundSize="auto"
      >
        <Image
          my={3}
          src="https://filmspace.co.za/images/filmspace-logo-black.svg"
        />
        <Box py={6} top="0">
          {
            <FooterBlock
              heading="What we offer"
              subHeadings={[
                { label: "Resdential Spaces" },
                { label: "Commercial Spaces" },
                { label: "Studio Spaces" },
                { label: "Mobile Spaces" }
              ]}
            />
          }
          {
            <FooterBlock
              heading="Top Locations"
              subHeadings={[
                { label: "Cape Town" },
                { label: "Johannesburg (Soon)", isActive: false },
                { label: "Durban (Soon)", isActive: false }
              ]}
            />
          }
          {
            <FooterBlock
              heading="Hosting"
              subHeadings={[
                { label: "Host Guide" },
                { label: "Who can Host" },
                { label: "Host Insurance" },
                { label: "Location Agreement" }
              ]}
            />
          }
          {
            <FooterBlock
              heading="Help"
              subHeadings={[{ label: "Insurance" }, { label: "FAQ" }]}
            />
          }
          {
            <FooterBlock
              heading="Company"
              subHeadings={[{ label: "Legal Stuff" }, { label: "Contact Us" }]}
            />
          }
          <Box display="inline-block" verticalAlign="top" mr="8%">
            <Text fontSize="16px" color="#000" fontWeight="700" mb={2}>
              Join Us
            </Text>
            <FacebookIcon style={{ fontSize: "30px", cursor: "pointer" }} />
            <InstagramIcon style={{ fontSize: "30px", cursor: "pointer" }} />
            <TwitterIcon style={{ fontSize: "30px", cursor: "pointer" }} />
            <LinkedInIcon style={{ fontSize: "30px", cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
