import React from "react";
import LoginModal from "./components/LoginModal";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import {
  LinkProps as RouterLinkProps,
  Link as RouterLink,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(() => {
    const data = localStorage.getItem("token");
    if (!data) return true;
    return false;
  });

  const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
  >((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

  const theme = responsiveFontSizes(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {!open ? (
        <LoginModal open={open} setOpen={setOpen} />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
