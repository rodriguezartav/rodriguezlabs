import React from "react";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import AppStateProvider, { useAppState } from "./state";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ErrorDialog from "./components/ErrorDialog/ErrorDialog";
import generateConnectionOptions from "./utils/generateConnectionOptions/generateConnectionOptions";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import theme from "./theme";
import "./types";
import { VideoProvider } from "./components/VideoProvider";
import UnsupportedBrowserWarning from "./components/UnsupportedBrowserWarning/UnsupportedBrowserWarning";

const VideoApp = () => {
  const { error, setError, settings } = useAppState();
  const connectionOptions = generateConnectionOptions(settings);

  React.useEffect(() => {
    return () => {
      connect(token);
    };
  }, []);

  return (
    <UnsupportedBrowserWarning>
      <VideoProvider options={connectionOptions} onError={setError}>
        <ErrorDialog dismissError={() => setError(null)} error={error} />
        <App />
      </VideoProvider>
    </UnsupportedBrowserWarning>
  );
};

export default function Component() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <AppStateProvider>
        <VideoApp />
      </AppStateProvider>
    </MuiThemeProvider>
  );
}
