import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/allPosts`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };
    fetchInitialPosts();
  }, []);

  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        const response = await axios.get(`http://localhost:8081/poststext/${query}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
  };

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
        <Button
          sx={{
            margin: "1% 2%",
            borderColor: "#1976d2",
            color: "#1976d2",
            '&:hover': {
              borderColor: "#1976d2",
              backgroundColor: "#1976d2",
              color: "#fff",
            },
            '& a': {
              color: "inherit",
              textDecoration: "none",
              display: "inline-block",
              width: "100%",
              height: "100%",
              lineHeight: "2.5rem",
            }
          }}
          variant="outlined"
        >
          <Link to="/">Home</Link>
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "70%", marginRight: "1%" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{ height: '3rem', padding: '0 1.5rem' }}
          >
            Search
          </Button>

        </Box>
      </Grid>
      {post.length > 0 ? (
        post.map((p) => (
          <Grid key={p.id} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "2rem", fontWeight: "600" }}
              >
                {p.profile}
              </Typography>
              <Typography sx={{ color: "#585858", marginTop: "2%" }} variant="body">
                Description: {p.desc}
              </Typography>
              <br />
              <br />
              <Typography variant="h6">
                Years of Experience: {p.exp} years
              </Typography>
              <Typography gutterBottom variant="body">Skills : </Typography>
              {p.techs.map((s, i) => (
                <Typography variant="body" gutterBottom key={i}>
                  {s} . {` `}
                </Typography>
              ))}
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ margin: "2%" }}>
          No posts found
        </Typography>
      )}
    </Grid>
  );
};

export default Feed;
