import React from "react";
import { AllRoutes } from "./routes/Router";
import theme from "./constant/theme"
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>      
        <AllRoutes/>    
     </ThemeProvider>
  )      

}

export default App;
