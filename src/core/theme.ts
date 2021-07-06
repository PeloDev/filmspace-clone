import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#84cea3",
    primaryDark: "#00A961",
    accent: "#FFBF00",
    background: "#2B2B2C",
    facebook: "#3b5998",
    google: "#FE2B26"
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Raleway"
      }
    }
  }
});

export default theme;
