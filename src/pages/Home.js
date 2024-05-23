import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <div className="home-container">
      <Typography sx={{ marginTop: "0%", marginBottom: "10%", color: "white" }} variant="h3" align="center" className="title">
          <h3 style={{ fontFamily: 'Arial', fontSize: '1.5em', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4caf50' }}>Hiring<span style={{ color: '#2196f3' }}>$</span>kills</h3>
          Explore new opportunities or find the best talent!
      </Typography>

      <div>
      <ul className="ul">
        <li>
          <Button
            startIcon={<WorkIcon />}
            sx={{ margin: "2% 3%", backgroundColor: '#4caf50', color: 'white', '&:hover': { backgroundColor: '#388e3c' } }}
            variant="contained" // Changed to contained for a more pronounced look
            className="home-button"
          >
            <Link to="/employer/dashboard" className="link">
              Hire talent
            </Link>
          </Button>
        </li>
        <li>
          <Button
            startIcon={<SearchIcon />}
            sx={{ margin: "2% 3%", backgroundColor: '#2196f3', color: 'white', '&:hover': { backgroundColor: '#1976d2' } }}
            variant="contained" // Changed to contained for a more pronounced look
            className="home-button"
          >
            <Link to="/employee/feed" className="link">
              Get Job Now
            </Link>
          </Button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Home;
