import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { Provider } from './provider';
import { ToastNotificationContainer } from './components/ToastNotifications/ToastNotificationContainer';
import AppInitializer from './AppInitializer';
import './static/fonts/Montserrat-Regular.ttf'

App.propTypes = {
  router: PropTypes.elementType
}

const queryClient = new QueryClient();

const font = "'Montserrat', sans-serif";

const theme = createTheme({
  // typography: {
  //   fontFamily: font,
  // }
});

function App({ router }: any) {
  const Router = router || BrowserRouter
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme} >
          <Box sx={{ marginBottom: 5 }}>
            <StylesProvider>
              <CssBaseline  />
              <ToastNotificationContainer />
              <Router ignoreScrollBehavior>
                <AppInitializer>
                  <AppRoutes />
                </AppInitializer>
              </Router>
            </StylesProvider>
          </Box>
        </ThemeProvider>

      </Provider>

    </>
  );
}

export default App;
