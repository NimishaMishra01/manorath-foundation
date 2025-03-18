"use client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" sx={{ maxWidth: 500, mx: "auto", p: 4, bgcolor: "white", boxShadow: 3, borderRadius: 2 }}>
        <TextField fullWidth label="Your Name" margin="normal" />
        <TextField fullWidth label="Your Email" type="email" margin="normal" />
        <TextField fullWidth label="Your Message" multiline rows={4} margin="normal" />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
