import MainLayout from "@layouts/MainLayout";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "@styles/theme/MuiTheme";

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
