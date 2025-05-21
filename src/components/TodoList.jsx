import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

// ICONS

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import Grid from "@mui/material/Grid";
// Components
import Todo from "./Todo";

export default function TodoList() {
  return (
    <Container maxWidth="md">
      <Card style={{ size: "100" }}>
        <CardContent>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h2"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            List
          </Typography>
          <Divider />
          {/* FILTER BUTTONS */}

          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            fullWidth
          >
            <ToggleButton value="">All</ToggleButton>
            <ToggleButton value="">Done</ToggleButton>
            <ToggleButton value="">In Progress</ToggleButton>
          </ToggleButtonGroup>
          {/*========= FILTER BUTTONS ===========*/}

          {/* TODO LIST */}
          <Todo />

          {/* input + add button */}
          <Grid container>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{
                background: "green",
                padding: "10px 20px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              tetst
            </Grid>

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{
                background: "purple",
                padding: "10px 20px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              tetst
            </Grid>
          </Grid>

          {/* input + add button */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
