import React from "react";
import { AllRoutes } from "./routes/Router";
import Header from "./Components/Header/Header"
import theme from "./constant/theme"
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>      
          <Header/>
        <AllRoutes/>    
     </ThemeProvider>
  )      

}

export default App;
