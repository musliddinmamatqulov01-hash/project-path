import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "./roducts"; 
import IMg from "./assets/Rectangle 37 (3).png"
import IMG1 from "./assets/Rectangle 41 (1).png"; 
import IMG2 from "./assets/Rectangle 41 (2).png"; 
import IMG3 from "./assets/Rectangle 41.png"; 

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: "500px",
          backgroundImage: `url(${IMg})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography variant="h2" color="white" fontWeight="bold">
            Rest, Relax, Unwind
          </Typography>

          <Typography color="white" my={2} variant="h5">
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
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{textAlign:"center",fontWeight:"bold",marginBottom:"60px"}}>
          Featured
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {products.map((item) => (
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

              <Typography variant="subtitle1" fontWeight="medium" mt={1}>
                {item.name}
              </Typography>

              <Typography color="textSecondary">
                ${item.price}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
          <Button
          sx={{backgroundColor:"orange",color:"white"}}
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