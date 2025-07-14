import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Box } from "@mui/system"
import NavBar from "@/scenes/navbar"
import  Dashboard  from "@/scenes/dashboard"

function App() {
  const theme = useMemo(() => createTheme(themeSettings),[])
  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2SSrem">
          
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/predictions" element={<div>predictions page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
