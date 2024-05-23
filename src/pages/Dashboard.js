import * as React from 'react';
import { Box, Tab, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import Create from './Create';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          padding: "2rem",
          color: "#fff"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginBottom: "1rem",
            position: "relative"
          }}
        >
                    <Button
            sx={{
              position: "absolute",
              left: "2rem",
              backgroundColor: "#fff",
              color: "#1976d2",
              '&:hover': {
                backgroundColor: "#1976d2",
                color: "#fff",
              }
            }}
            variant="contained"
          >
            <Link to="/" style={{ color: "inherit", textDecoration: 'none' }}>Home</Link>
          </Button>
          <Typography variant='h3' align='center' sx={{ flexGrow: 1 }}>
            EMPLOYER DASHBOARD
          </Typography>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Create Post" value="1" sx={{ color: "#fff" }} />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "2rem" }}>
              <Create />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
