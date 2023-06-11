import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import MainLayout from "@layouts/MainLayout";
import { MuiTheme } from "@styles/theme/MuiTheme";
import { store } from "@stores/store";
import { AppRouter } from "@features/Router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Router>
            <MainLayout children={<AppRouter />} />
          </Router>
        </LocalizationProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
