import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMg from "./assets/Rectangle 37 (3).png";
import IMG1 from "./assets/Rectangle 41 (1).png"; 
import IMG2 from "./assets/Rectangle 41 (2).png"; 
import IMG3 from "./assets/Rectangle 41.png"; 

function Home() {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 5, name: "Dining Table", price: 6.99, image: IMG1 },
    { id: 12, name: "Leather Sofa", price: 9.99, image: IMG2 },
    { id: 2, name: "Albany Table", price: 79.99, image: IMG3 },
  ];

  return (
    <>
      <div
        style={{
          height: "500px",
          backgroundImage: `url('${IMg}')`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Container sx={{color:"white"}}>
          <Typography variant="h2" color="white" sx={{marginBottom:"30px"}} fontWeight="bold">
            Rest, Relax, Unwind
          </Typography>

          <Typography color="white" my={2} sx={{marginBottom:"30px"}} variant="h5">
            Embrace your choices
          </Typography>

          <Button
            variant="outlined"
            sx={{ 
              color: "white", 
              borderColor: "white", 
              "&:hover": { borderColor: "#ccc", color: "#ccc" } 
            }}
            onClick={() => navigate("/products")}
          >
            SHOP NOW
          </Button>
        </Container>
      </div>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "60px" }}>
          Featured
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {featuredProducts.map((item) => (
            <Box 
              key={item.id} 
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/products/${item.id}`)} 
            >
              <img
                src={item.image}
                alt={item.name}
                width="100%"
                style={{ borderRadius: "8px", objectFit: "cover", height: "200px" }}
              />

              <Typography variant="subtitle1" fontWeight="medium" mt={1} sx={{ textTransform: "capitalize" }}>
                {item.name}
              </Typography>

              <Typography color="textSecondary" fontWeight="bold">
                ${item.price.toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Ислоҳ шуд: <div>-и оддиро ба <Box> иваз кардем, чунки дар div хосияти sx={...} кор намекунад */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: "orange", 
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1,
              "&:hover": { backgroundColor: "#e68a00" } 
            }}
            onClick={() => navigate("/products")}
          >
            ALL PRODUCTS
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Home;