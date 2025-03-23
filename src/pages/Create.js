import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: "", techs: [], desc: "" };

const Create = () => {
  const skillSet = [
  { name: "Angular" },
  { name: "AWS" },
  { name: "Blockchain" },
  { name: "C#" },
  { name: "Dot Net" },
  { name: "C++" },
  { name: "CSS" },
  { name: "Data Science" },
  { name: "Django" },
  { name: "Docker" },
  { name: "Git" },
  { name: "Hibernate" },
  { name: "HTML" },
  { name: "Java" },
  { name: "JUnit" },
  { name: "JavaScript" },
  { name: "JDBC" },
  { name: "Kotlin" },
  { name: "Machine Learning" },
  { name: "MongoDB" },
  { name: "MicroServices" },
  { name: "Node.js" },
  { name: "PHP" },
  { name: "Python" },
  { name: "React.js" },
  { name: "RESTful API" },
  { name: "Ruby" },
  { name: "Rust" },
  { name: "SQL" },
  { name: "Servlets JSP" },
  { name: "Spring Boot" },
  { name: "Swift" },
  { name: "UI/UX Design" },
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedForm = { ...form, exp: form.exp }; // Keep exp as a string
    fetch("http://localhost:8081/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/employee/feed");
  };

  const { profile, exp, desc, techs } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTechsChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, techs: value });
  };

  return (
    <Paper sx={{ padding: "2%" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={handleChange}
            label="Job-profile"
            name="profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={handleChange}
            label="Years of Experience"
            name="exp"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={handleChange}
            label="Job-desc"
            name="desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: "1% auto", width: "50%" }}>
            <InputLabel id="techs-label">Required Skills</InputLabel>
            <Select
              labelId="techs-label"
              id="techs"
              multiple
              value={techs}
              onChange={handleTechsChange}
              renderValue={(selected) => selected.join(", ")}
              variant="outlined"
              fullWidth
            >
              {skillSet.map(({ name }, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
