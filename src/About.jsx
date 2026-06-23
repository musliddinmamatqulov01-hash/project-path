import React from "react";
import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ width: "100%" }}>
      
      <Box 
        sx={{ 
          bgcolor: "#f1f5f9", 
          py: 5, 
          display: "flex", 
          alignItems: "center" 
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h5" 
            component="h1" 
            sx={{ 
              color: "#1e3a8a", 
              fontWeight: "500",
              letterSpacing: "0.5px"
            }}
          >
            Home / About
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box 
          sx={{ 
            maxWidth: "750px", 
            mx: "auto",       
            textAlign: "center" 
          }}
        >
         
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: "bold", 
              color: "#222222",
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5
            }}
          >
            <Box component="span" sx={{ color: "#ba5d2c", fontWeight: "300" }}>
              /
            </Box>{" "}
            Our history
          </Typography>

          
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#475569", 
              lineHeight: 2,   
              letterSpacing: "0.8px",
              textAlign: "justify", 
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sesequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </Typography>
        </Box>
      </Container>

    </Box>
  );
}

export default About;