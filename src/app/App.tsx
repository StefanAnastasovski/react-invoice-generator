import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import MainLayout from "@layouts/MainLayout";
import { MuiTheme } from "@styles/theme/MuiTheme";
import { store } from "@stores/store";

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
