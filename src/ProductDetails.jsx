import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import {
  useParams,
} from "react-router-dom";

import { products } from "./roducts";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) =>
      item.id === Number(id)
  );

  return (
    <Container sx={{ py: 5 }}>

      <Typography mb={4}>
        Home / {product.name}
      </Typography>

      <Box
        display="flex"
        gap={5}
      >
        <img
          src={product.image}
          width="600"
        />

        <Box>

          <Typography variant="h3">
            {product.name}
          </Typography>

          <Typography>
            BY {product.company}
          </Typography>

          <Typography
            variant="h5"
            my={2}
          >
            ${product.price}
          </Typography>

          <Typography>
            {product.desc}
          </Typography>

          <Button
            sx={{ mt: 3 }}
            variant="contained"
          >
            ADD TO CART
          </Button>

        </Box>
      </Box>

    </Container>
  );
}

export default ProductDetails;