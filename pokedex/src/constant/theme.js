import { createTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor, secundaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor
     // contrastText: "white",
    },
    secundary: {
      main: secundaryColor

    },
    text: {
      primary: neutralColor
    },
  },
});

export default theme;
