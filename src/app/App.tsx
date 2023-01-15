import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import MainLayout from "@layouts/MainLayout";
import { MuiTheme } from "@styles/theme/MuiTheme";
import { store } from "@stores/store";
import { AppRouter } from "@features/Router";

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <Router>
          <MainLayout children={<AppRouter />} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
