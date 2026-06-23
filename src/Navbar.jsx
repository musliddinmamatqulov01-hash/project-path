import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black" }}
      elevation={0}
    >
      <Toolbar>

        <Button onClick={() => navigate("/")}>
          Home
        </Button>

        <Button onClick={() => navigate("/products")}>
          Products
        </Button>

        <Button onClick={() => navigate("/about")}>
          About
        </Button>

        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "cursive",
          }}
        >
          comfy
        </Typography>

        <Box>🛒</Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;