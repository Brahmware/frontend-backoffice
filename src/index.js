import React,
{
    Suspense as LazyLoadProvider
} from 'react';
import { store } from './App/store';
import { theme } from './brahmwareTheme/theme';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import {
    BrowserRouter as RouterProvider,
    Route,
    Routes
} from 'react-router-dom';
import Loading from './pages/Loading';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <ReduxProvider store={store}>
                <MuiThemeProvider theme={theme}>
                    <RouterProvider>
                        <LazyLoadProvider fallback={<Loading />}>
                            <Routes>
                                <Route path='/*' element={<App />} />
                            </Routes>
                        </LazyLoadProvider>
                    </RouterProvider>
                </MuiThemeProvider>
            </ReduxProvider>
        </HelmetProvider>
    </React.StrictMode>
);