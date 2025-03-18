"use client";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ paddingTop: 5, paddingBottom: 5, backgroundColor: '#F1F1F1', color: '#3B4A57' }}>
      <Container>
        <Grid container spacing={3}>

          {/* Footer Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: "#f9a826" }}>
              Manorath Foundation.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              A-4/119, Second Floor <br />
              Asha Park, Shiv Mandir Marg <br />
              Mandawali, Delhi 110092 <br />
              <strong>Phone:</strong> +91 9711520920 <br />
              <strong>Email:</strong> manorathfoundation@gmail.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.facebook.com/manorathfoundationIndia/" passHref>
                <Facebook sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
              <Link href="https://twitter.com/manorathngo" passHref>
                <Twitter sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
              <Link href="https://www.instagram.com/manorathfoundation/" passHref>
                <Instagram sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
            </Box>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#3B4A57' }}>
              Useful Links
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <Link href="/" passHref style={{textDecoration:"none"}}>
                  <Typography variant="body2" sx={{ color: '#000', textDecoration: 'none', '&:hover': { color: '#3B4A57' } }}>
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref style={{textDecoration:"none"}}>
                  <Typography variant="body2" sx={{ color: '#000', textDecoration: 'none', '&:hover': { color: '#3B4A57' } }}>
                    About us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref style={{textDecoration:"none"}}>
                  <Typography variant="body2" sx={{ color: '#000', textDecoration: 'none', '&:hover': { color: '#3B4A57' } }}>
                    Services
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/terms" passHref style={{textDecoration:"none"}}>
                  <Typography variant="body2" sx={{ color: '#000', textDecoration: 'none', '&:hover': { color: '#3B4A57' } }}>
                    Terms of service
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/privacy" passHref style={{textDecoration:"none"}}>
                  <Typography variant="body2" sx={{ color: '#000', textDecoration: 'none', '&:hover': { color: '#3B4A57' } ,}}>
                    Privacy policy
                  </Typography>
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Our Social Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#3B4A57' }}>
              Our Social
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.facebook.com/manorathfoundationIndia/" passHref>
                <Facebook sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
              <Link href="https://twitter.com/manorathngo" passHref>
                <Twitter sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
              <Link href="https://www.instagram.com/manorathfoundation/" passHref>
                <Instagram sx={{ '&:hover': { color: '#A7B0A1' }, color: '#3B4A57' }} />
              </Link>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#3B4A57' }}>
              Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Get updates about upcoming events.
            </Typography>
            <form action="" method="post">
              <TextField
                label="Your Email"
                variant="outlined"
                size="small"
                sx={{
                  width: '80%',
                  marginBottom: 1,
                  backgroundColor: '#F1F1F1',
                  borderRadius: '20px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .MuiInputBase-input': {
                    padding: '10px',
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: '100%',
                  backgroundColor: '#A7B0A1',
                  '&:hover': { backgroundColor: '#8C9E8B' },
                  borderRadius: '20px',
                }}
              >
                Subscribe
              </Button>
            </form>
          </Grid>


        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ textAlign: 'center', paddingTop: 3 }}>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            &copy; Copyright <strong><span style={{color: "#f9a826"}}>Manorath Foundation</span></strong>. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>

  );
};

export default Footer;
