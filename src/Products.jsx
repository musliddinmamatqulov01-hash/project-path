import { useState } from 'react';
import { Box, Typography, TextField, Slider, List, ListItem, ListItemButton, ListItemText, Grid } from '@mui/material';
import img2 from "./assets/Frame 296.png";
import img3 from "./assets/Frame 295.png";
import img4 from "./assets/Frame 299.png";
import img5 from "./assets/Rectangle 41 (1).png";
import img6 from "./assets/Frame 300.png";
import img7 from "./assets/Frame 301.png";
import img8 from "./assets/Frame 302.png";
import img9 from "./assets/Frame 303.png";
import img10 from "./assets/Frame 307.png";
import img11 from "./assets/Rectangle 41 (2).png";
import img12 from "./assets/Rectangle 41.png";

const allProductsList = [
  { id: 1, name: 'high-back bench', price: 9.99, category: 'Ikea', image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'modern bookshelf', price: 8.99, category: 'Caressa', image: img3 },
  { id: 8, name: 'emperor bed', price: 21.99, category: 'Liddy', image: img3 },
  { id: 9, name: 'utopia sofa', price: 39.95, category: 'Ikea', image: img3 },
  { id: 10, name: 'entertainment center', price: 29.98, category: 'Marcos', image: img3 },
  { id: 11, name: 'albany sectional', price: 10.99, category: 'Caressa', image: img3 },
  { id: 2, name: 'albany table', price: 79.99, category: 'Marcos', image: img3 },
  { id: 3, name: 'accent chair', price: 25.99, category: 'Caressa', image: img3 },
  { id: 4, name: 'wooden table', price: 45.99, category: 'Liddy', image: img3 },
  { id: 5, name: 'dining table', price: 6.99, category: 'Ikea', image: img3 },
  { id: 6, name: 'sofa set', price: 69.99, category: 'Marcos', image: img3 },
  { id: 12, name: 'leather sofa', price: 9.99, category: 'Liddy', image: img3 }
];

const Products = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState(80);

  const categories = ['All', 'Ikea', 'Marcos', 'Caressa', 'Liddy'];

  const filteredProducts = allProductsList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice = product.price <= price;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.paper' }}>
      <Box sx={{ width: '87%', bgcolor: '#f1f5f8', py: 5, px: { xs: 4, md: 12 }, mb: 6 }}>
        <Typography variant="h5" sx={{ color: '#243a52', fontWeight: 600, letterSpacing: '0.1rem', fontSize: '1.4rem' }}>
          Home / Products
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, px: { xs: 4, md: 12 }, pb: 8 }}>
        
        <Box sx={{ width: { xs: '100%', md: '250px' }, flexShrink: 0 }}>
          <TextField
            placeholder="Search..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            sx={{
              mb: 4,
              bgcolor: '#f1f5f8',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
                fontSize: '0.9rem',
                px: 1.5
              }
            }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#102a42', mb: 1.5, fontSize: '1rem', letterSpacing: '0.05rem' }}>
            Company
          </Typography>
          <List sx={{ p: 0, mb: 4 }}>
            {categories.map((cat) => (
              <ListItem key={cat} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton 
                  onClick={() => setCategory(cat)}
                  selected={category === cat}
                  sx={{ 
                    p: 0,
                    color: category === cat ? '#ba5d2c' : '#617d98',
                    '&:hover': { bgcolor: 'transparent', color: '#ba5d2c' },
                    '&.Mui-selected': { bgcolor: 'transparent', color: '#ba5d2c' }
                  }}
                >
                  <ListItemText 
                    primary={cat} 
                    primaryTypographyProps={{ 
                      fontSize: '0.9rem', 
                      fontWeight: category === cat ? 600 : 400,
                      letterSpacing: '0.05rem',
                      textTransform: 'capitalize'
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#102a42', mb: 1.5, fontSize: '1rem', letterSpacing: '0.05rem' }}>
            Price
          </Typography>
          <Slider
            value={price}
            onChange={(e, newValue) => setPrice(newValue)}
            min={0}
            max={100}
            sx={{
              color: '#617d98',
              height: 6,
              mb: 1,
              width: '90%',
              '& .MuiSlider-thumb': { bgcolor: '#617d98', width: 16, height: 16 },
              '& .MuiSlider-track': { border: 'none' },
              '& .MuiSlider-rail': { bgcolor: '#dde2e5' },
            }}
          />
          <Typography variant="body2" sx={{ color: '#486581', fontSize: '0.95rem', fontWeight: 500 }}>
            Value : ${price.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box 
                  sx={{ 
                    position: 'relative', 
                    height: 200, 
                    borderRadius: '4px', 
                    mb: 1.5, 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    bgcolor: '#f1f5f8'
                  }}
                >
                  <Box 
                    component="img"
                    src={product.image} 
                    alt={product.name} 
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      transition: '0.3s' 
                    }}
                  />
                  <Box 
                    className="search-icon-box"
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      opacity: 0, 
                      transition: '0.3s' 
                    }}
                  >
                    <Box 
                      sx={{ 
                        bgcolor: '#ba5d2c', 
                        p: 1.5, 
                        borderRadius: '50%', 
                        color: 'white', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 3,
                      
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2.5} 
                        stroke="currentColor" 
                        style={{ width: '18px', height: '18px' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#102a42', 
                    fontWeight: 400, 
                    letterSpacing: '0.05rem', 
                    mb: 0.25,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    textAlign: 'left'
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#617d98', 
                    fontWeight: 700, 
                    letterSpacing: '0.05rem',
                    textAlign: 'left',
                    fontSize: '0.9rem'
                  }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Box>
    </Box>
  );
};

export default Products;